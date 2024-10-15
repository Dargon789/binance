const { CoinMClient } = require('binance');

  // ENDPOINT: dapi/v1/positionRisk
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/coinm-client.ts#L403

const client = new CoinMClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getPositions({/* Add necessary parameters here */})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
