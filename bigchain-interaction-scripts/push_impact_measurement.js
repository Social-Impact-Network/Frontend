// npm install dotenv
require('dotenv').config();
// npm install bigchaindb-driver
const driver = require('bigchaindb-driver');
const API_PATH = 'http://3.121.239.82:9984/api/v1/';
// const API_PATH = 'https://test.ipdb.io/api/v1/';
// const API_PATH = 'http://localhost:9984/api/v1/'
const conn = new driver.Connection(API_PATH);
const fs  = require('fs');
const util = require('util');
// get latest written transaction and kwh from monitor
const { lastTx, kwh } = require('./last_tx.js'); 
// outsourced arrays of objects to avoid boiler plate code
const { latestNews } = require('./eventNews.js');
const { kwh_by_month } = require('./kwhByMonth.js');
const { timestamp, month, year } = require('./date.js');

const tx = lastTx; // copy last transaction 

// get keys
const tracker_publicKey = process.env.tracker_publicKey;
const tracker_privateKey = process.env.tracker_privateKey;


const monthsArr = [
	'JAN', 'FEB', 'MAR', 'APR', 'MAY',
	'JUN', 'JUL', 'AUG', 'SEP', 'OCT',
	'NOV', 'DEC'
];

// because of the different metadata formats a distinction of cases is needed 
// between first measurement and all following ones (gets updated later on)
let lastIndexMeas = tx.metadata.events == undefined ?  
	0 : tx.metadata.events.measurements.length-1;

// because of the different metadata formats a distinction of cases is needed
const lastTimestamp = tx.metadata.timestamp // before first measurement 
	|| tx.metadata.events.measurements[lastIndexMeas].timestamp; // else

// get month of the latest metadata entry
const lastDate = new Date(lastTimestamp);
const oldMonth = monthsArr[lastDate.getMonth()];

let metaNew; // special first metadata this script generates
let metaAppend; // metadata variable reserved for all other cases
let meta; // final metadata which will be uploaded

if(tx.metadata.event != 'OWNERSHIP_TRANSFER') {
	// handle to be appended measurement
	metaAppend = {
		'timestamp': timestamp,
		'output_in_kwh': kwh
	};
} else { 
	// handle special first measurement-metadata entry which includes
	// not only the first measurement but the summary template as well

	// delete previous metadata (OWNERSHIP_TRANSFER etc. not needed anymore)
	tx.metadata = '';
	// prepare special first metadata
	metaNew = {
		'summary': {
			'kwh_total': 0,
			'kwh_by_year': [{
				'year': year,
				'kwh': 0,
				'kwh_by_month': kwh_by_month
			}],
		},
		'events': {
			'measurements': [{
				'timestamp': timestamp,
				'output_in_kwh': kwh
			}],
			'news': null
		}
	}; 
}

// handles new month and thus updating summary and deleting measurements of the past month
if(oldMonth != month) { // month changed
	
	if(oldMonth === 'JAN' & month === 'FEB'){ // critical transition january to february
		const newYear = {
			'year': year,
			'kwh': 0,
			'kwh_by_month': kwh_by_month
		}
		// prepare new entry
		tx.metadata.summary.kwh_by_year.push(newYear); 
	}

	let sum = 0;
	// get index of the newest kwh_by_year
	const lastIndexYears = tx.metadata.summary.kwh_by_year.length-1;
	// sum up all kwh of the past month
	for(let i = 0; i <= lastIndexMeas; i++) {
		sum += tx.metadata.events.measurements[i].output_in_kwh;
	}

	// add the summed up kwh of the past month to the summed up kwh of the year
	tx.metadata.summary.kwh_by_year[lastIndexYears].kwh += sum;

	// write sum of past month in reserved array cell
	tx.metadata.summary.kwh_by_year[lastIndexYears].kwh_by_month[lastDate.getMonth()].kwh = sum;


	// delete all metadata measurement entries of the past month
	// Bigchaindb doesn't support arbitrary long metadata!
	tx.metadata.events.measurements = [];
}


if(tx.metadata != '') { // not the first entry
	tx.metadata.events.measurements.push(metaAppend);
	meta = tx.metadata;
} else { // first metadata entry
	meta = metaNew;
}

// update last measurements array index because of the if-else above
lastIndexMeas = meta.events.measurements.length -1;

// total up ALL kwh
meta.summary.kwh_total += meta.events.measurements[lastIndexMeas].output_in_kwh;

// set news
meta.events.news =  latestNews;

const transaction = driver.Transaction.makeTransferTransaction(
	[{ tx: tx, output_index: 0 }],
	[driver.Transaction.makeOutput(driver.Transaction.makeEd25519Condition(tracker_publicKey))],
	meta
);

	
const txSigned = driver.Transaction.signTransaction(transaction, tracker_privateKey);
conn.postTransactionCommit(txSigned)
.then(tx => {
	// write last written transaction for convenience in a .js file
	fs.writeFileSync('./last_tx.js', 'const saveLastTx =\n' + util.inspect(tx, { depth: null }) , 'utf-8');
	fs.appendFileSync('last_tx.js', ';\nmodule.exports = { saveLastTx };','utf-8');	
})
// ungreacefully exit to make things faster for testing
.then(() => process.exit(1));