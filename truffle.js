require('dotenv').config();
 const HDWalletProvider = require("truffle-hdwallet-provider");

 module.exports = {
   networks: {
     development: {
       host: "localhost",
       port: 8545,
       network_id: '*', // Match any network id
       // https://github.com/trufflesuite/truffle/issues/271#issuecomment-341651827
       gas: 2900000
     },
     kovan: {
         provider: new HDWalletProvider(process.env.MNENOMIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
         network_id: "*",
         gas: 5000000
     },
   }
 };
