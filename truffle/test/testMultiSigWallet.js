import ether from './helpers/ether';

const BigNumber = web3.BigNumber;

const MultiSigWallet = artifacts.require('MultiSigWallet');

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

contract('MultiSigWallet Test', async ([owner1, owner2, owner3, owner4]) => {
    let wallet;

    let deployContract = async ()=> {
        wallet = await MultiSigWallet.new([owner1,owner2], 2);

    };
});