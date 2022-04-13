require('dotenv').config();
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.WSS_ENDPOINT));
const subscription = web3.eth.subscribe('pendingTransactions', (err) => {
    if (err) console.error(err);
});

subscription.on('data', async (transaction) => {
    const transactionDetails = await web3.eth.getTransaction(transaction);
    if (transactionDetails) {
        console.log({ ...transactionDetails })
    }
});