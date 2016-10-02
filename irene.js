var Client = require('bitcore-wallet-client-dash');


var fs = require('fs');
var BWS_INSTANCE_URL = 'http://localhost:3232/bws/api'

var client = new Client({
    baseUrl: BWS_INSTANCE_URL,
    verbose: false,
});

client.createWallet("My Wallet", "Irene", 2, 2, {network: 'testnet'}, function(err, secret) {
    if (err) {
        console.log('error: ',err);
        return
    };
    // Handle err
    console.log('Wallet Created. Share this secret with your copayers: ' + secret);

    // CzQorRoG9z7e9eVFkvoffQXEhckiSdYhrzPmbDE671PSMjuddkRqkdpErNyeS6HmyvTPioJfknT

    fs.writeFileSync('irene.dat', client.export());
});