var MultiSigWallet = artifacts.require("MultisigWallet");

module.exports = function(deployer) {
  deployer.deploy(MultiSigWallet, [web3.eth.accounts[0]], 1);
};
