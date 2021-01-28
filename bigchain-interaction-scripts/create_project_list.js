// npm install bigchaindb-driver
const driver = require('bigchaindb-driver');
// npm install dotenv
require('dotenv').config();
const API_PATH = 'http://3.121.239.82:9984/api/v1/';
// const API_PATH = 'https://test.ipdb.io/api/v1/';
// const API_PATH = 'http://localhost:9984/api/v1/'
const conn = new driver.Connection(API_PATH);
const fs  = require('fs');
const util = require('util');
const admin_publicKey = process.env.admin_publicKey;
const admin_privateKey = process.env.admin_privateKey;
const timestamp = Date.now();

const metaCreate = {
	'timestamp': timestamp,
	'event': "CREATE"
};

const asset = { 
	'notice': 
		'This is the collection of all legitimate projects ' +
		'supportet by the Social Impact Network. Their asset IDs are ' + 
		'constantly updated and stored in the metadata of transactions ' +
		'which use the asset ID of this very CREATE transaction.' 
};

// Construct a transaction payload
const tx = driver.Transaction.makeCreateTransaction(
	asset,

	metaCreate,

	// A transaction needs an output
	[ driver.Transaction.makeOutput(
			driver.Transaction.makeEd25519Condition(admin_publicKey))
	],
	admin_publicKey
);

// Sign the transaction with private keys
const txCreateadminSimpleSigned = driver.Transaction.signTransaction(tx, admin_privateKey);

conn.postTransactionCommit(txCreateadminSimpleSigned)
.then(tx => {
    fs.writeFileSync('./last_tx.js', 'const project =\n' + util.inspect(tx, { depth: null }) , 'utf-8')
    fs.appendFileSync('last_tx.js', ';\n\nmodule.exports = { project };','utf-8');

	conn.searchAssets(tx.asset.id)  
	.then(assets => {
		console.log(util.inspect(assets, { depth: null }))
		process.exit(1)
	})
})

