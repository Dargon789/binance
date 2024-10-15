const { MainClient } = require('binance');

  // ENDPOINT: sapi/v1/sub-account/futures/positionRisk
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/main-client.ts#L1569

const client = new MainClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getSubAccountFuturesPositionRisk({/* Add necessary parameters here */})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
