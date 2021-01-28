// npm install dotenv
require('dotenv').config();
// npm install bigchaindb-driver
const driver = require('bigchaindb-driver');
const API_PATH = 'http://3.121.239.82:9984/api/v1/';
//const API_PATH = 'https://test.ipdb.io/api/v1/';
// const API_PATH = 'http://localhost:9984/api/v1/'
const conn = new driver.Connection(API_PATH);
const fs  = require('fs');
const util = require('util')
const { project } = require('./save.js'); 
const timestamp = Date.now();

// get latest transaction here
const tx = project;

const admin_publicKey = process.env.admin_publicKey;
const admin_privateKey = process.env.admin_privateKey;


/* Put in here corresponding asset ids. 
* It is recommended to add them one by one. 
* That is, adding one additional asset id per TX */
const idList = [
	'asset_id_1_here',
	// 'asset_id_2_here' // after asset id 1 is written to bigchaindb
];

const metaNew = {
	'timestamp': timestamp,
	'event': 'APPEND_ID',
	'projects': idList
};

const transaction = driver.Transaction.makeTransferTransaction(
	[{ tx: tx, output_index: 0 }],
	[driver.Transaction.makeOutput(driver.Transaction.makeEd25519Condition(admin_publicKey))],
	metaNew
);
	
const txSigned = driver.Transaction.signTransaction(transaction, admin_privateKey);
conn.postTransactionCommit(txSigned)
.then(tx => {
	fs.writeFileSync('./save.js', 'const project =\n' + util.inspect(tx, { depth: null }) , 'utf-8');
	fs.appendFileSync('save.js', ';\n\nmodule.exports = { project };','utf-8');	
})
.then(() => process.exit(1));