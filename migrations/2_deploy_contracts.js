const Cascade = artifacts.require('./Cascade.sol')

module.exports = function(deployer) {
  deployer.deploy(Cascade, "HI", web3.eth.accounts[0]);
};
