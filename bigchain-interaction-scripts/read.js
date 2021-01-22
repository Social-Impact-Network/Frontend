// npm install xmlhttprequest
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const { saveLastTx } = require('./last_tx.js'); 

// read the asset id from save.js
// note that append.js doesn't change the asset id 
const assetID = saveLastTx.asset.id;

const urlKwh = 'https://spmonitorbridge-server.herokuapp.com/spDailyKWH';
const urlLastTx = 'http://3.121.239.82:9984/api/v1/transactions?asset_id='+assetID+'&last_tx=true';

function Get(url) {
    const Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

const jsonObjMonitor = JSON.parse(Get(urlKwh));
const kwh = jsonObjMonitor.results.kwh;
const jsonObjLastTx = JSON.parse(Get(urlLastTx));
const lastTx = jsonObjLastTx[0];

module.exports = { kwh, lastTx };