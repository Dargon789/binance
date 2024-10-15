const { MainClient } = require('binance');

  // ENDPOINT: sapi/v1/loan/vip/repay
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/main-client.ts#L3062

const client = new MainClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.repayVipLoan({/* Add necessary parameters here */})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
