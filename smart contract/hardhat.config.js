// https://eth-rinkeby.alchemyapi.io/v2/_EnwHLpH68Ure6UkfID51ovMoSJS3gBj

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
