const { CoinMClient } = require('binance');

  // This example shows how to call this Binance API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "binance" for Binance exchange
  // This Binance API SDK is available on npm via "npm install binance"
  // ENDPOINT: dapi/v1/allOpenOrders
  // METHOD: DELETE
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/coinm-client.ts#L364

const client = new CoinMClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.cancelAllOpenOrders(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });