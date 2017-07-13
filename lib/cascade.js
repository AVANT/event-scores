const Web3 = require('web3')

export default class {
  constructor (Cascade, cascadeAddress, provider, fromAddress) {
    this.web3 = new Web3(provider)

    Cascade.setProvider(provider)
    Cascade.defaults({
      from: fromAddress,
      gas: 400000
    })
    this.cascade = Cascade.at(cascadeAddress)
  }

  getMessage (receiver) {
    return this.cascade.messages(this.web3.sha3(receiver))
      .then((entry) => {
        return Promise.resolve(entry)
      })
  }
}
