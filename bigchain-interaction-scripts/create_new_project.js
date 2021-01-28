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
const { asset } = require('./asset.js');
const { timestamp } = require('./date.js'); 

const admin_publicKey = process.env.admin_publicKey;
const admin_privateKey = process.env.admin_privateKey;
const tracker_publicKey = process.env.tracker_publicKey;

const metaCreate = {
	'timestamp': timestamp,
	'event': "CREATE"
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


// Sign the transaction with admin's private keys
const txCreateadminSimpleSigned = driver.Transaction.signTransaction(tx, admin_privateKey);

conn.postTransactionCommit(txCreateadminSimpleSigned).then(tx => {
	/* Put in here corresponding asset ids. 
	* It is recommended to add them one by one. 
	* That is, adding one additional asset id per TX */
	const idList = [
		tx.asset.id,
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

		const metaTransfer = {
			'timestamp': timestamp,
			'event': "OWNERSHIP_TRANSFER",
			'from': tx.outputs[0].public_keys[0],
			'to': tracker_publicKey
		};

		const transaction = driver.Transaction.makeTransferTransaction(
			[{ tx: txCreateadminSimpleSigned, output_index: 0 }],
			[driver.Transaction.makeOutput(driver.Transaction.makeEd25519Condition(tracker_publicKey))],
			metaTransfer
		);

		const signedCryptoConditionTx = driver.Transaction.signTransaction(transaction, admin_privateKey);
		return conn.postTransactionCommit(signedCryptoConditionTx);
	})
	.then(tx => {
		console.log('Is Admin the owner?', tx.outputs[0].public_keys[0] === admin_publicKey);
		console.log('Is Tracker the owner?', tx.outputs[0].public_keys[0] === tracker_publicKey);
		console.log('Was Admin the previous owner?', tx.inputs[0].owners_before[0] === admin_publicKey);
		
		// write last written transaction for convenience in a .js file
		fs.writeFileSync('./last_tx.js', 'const saveLastTx =\n' + util.inspect(tx, { depth: null }) , 'utf-8');
		fs.appendFileSync('last_tx.js', ';\nmodule.exports = { saveLastTx };','utf-8');

		conn.searchAssets(tx.asset.id)  
		.then(assets => {
			console.log(util.inspect(assets, { depth: null }))
			process.exit(1)
		})
	})
})