/* global web3:true, assert:true, artifacts:true, contract:true */
/* eslint-env mocha */

import { default as CascadeLib } from '../lib/ens_registrar'
const Cascade = artifacts.require('./Cascade.sol')

contract('Cascade integration', (accounts) => {
  let cascade

  before('set up cascade', (done) => {
    Cascade.deployed().then((instance) => {
      cascade = new CascadeLib(
        Cascade,
        instance.address,
        web3.currentProvider,
        accounts[0]
      )
    }).then(() => done())
  })

  /*
    struct Message {
      string message; // Position 0
      bytes32 to32; // Position 1
      bool sent; // Position 2
      string privKey; // Position 3
    }
  */
  it('has an initial message sent to the first account', (done) => {
    cascade.hasMessage(accounts[0])
      .then((hasMessage) => {
        assert.equal(hasMessage[1], web3.sha3(accounts[0]), 'addresses are equal')
        done()
      })
  })
})
