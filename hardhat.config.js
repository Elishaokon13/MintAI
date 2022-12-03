require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://convincing-flashy-dinghy.rinkeby.discover.quiknode.pro/ace746c2621efeff1d41227ec3f57457e376cf16/',
      accounts: ['fa9e097b12c5a44ef573e4baa91d5c35cf0df44adab9209b86b070c01eb4daf7'],
    },
  },
};