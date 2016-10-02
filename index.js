var Client = require('bitcore-wallet-client-dash');

var BWS_INSTANCE_URL = 'http://localhost:3232/bws/api'

var client = new Client({
    baseUrl: BWS_INSTANCE_URL,
    verbose: false,
});

var irene = '{"network":"testnet","xPrivKey":"tprv8ZgxMBicQKsPfHfS2U5P6s8nwqB41azFzFUYwNjELzP1vsXD5BNRTdCccDCFMxuNCNqFZgS84AtCUT1sLqNiJMAQmCKieV2K22oyhm3M4SJ","xPubKey":"tpubDD7HwseM4QvT9on9HX8Yy5mpbH9iqM42ZQc2WDFQDxX7YPcoLjQfDr8vkvYeJLytWBaoiuvYSCEr9BTGYe3kQxgbJm15z8ewmpcu2Er4cP8","requestPrivKey":"d6c6b7d99485641edfebaf5b379c0fa5d80bd172405aa442723f0a09b938a3b3","requestPubKey":"021f19f8d56db7620357f68c03ca72c4e7c1bc3b462b6dae451e738eaf994c700d","copayerId":"11547404f0dc2aebde15151d7e4c0abdf2347f3e3dea99965cdc6e723d6711e2","publicKeyRing":[{"xPubKey":"tpubDD7HwseM4QvT9on9HX8Yy5mpbH9iqM42ZQc2WDFQDxX7YPcoLjQfDr8vkvYeJLytWBaoiuvYSCEr9BTGYe3kQxgbJm15z8ewmpcu2Er4cP8","requestPubKey":"021f19f8d56db7620357f68c03ca72c4e7c1bc3b462b6dae451e738eaf994c700d"}],"walletId":"65ae0aed-9094-4963-b54c-b83b1283ee50","walletName":"My Wallet","m":2,"n":2,"walletPrivKey":"3bc81f7786bd9ba15c5bd70a417ad3c98c3e90b2ea56444d284abd792ba16759","personalEncryptingKey":"Lqf+W/WSD0goKnN9ikma1A==","sharedEncryptingKey":"+EowZ0iamU1hqkxumyqBUA==","copayerName":"Irene","entropySource":"15f7ff7c5f659d8b11645b0dd3dafdebbf62c6761d96153972a80d8bda12e1aa","derivationStrategy":"BIP44","account":0,"addressType":"P2SH"}';

client.import(irene);

client.openWallet(function(err, res) {

    console.log(res);

});
