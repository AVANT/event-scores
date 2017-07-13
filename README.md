# [Tutorial here!](http://truffleframework.com/tutorials/creating-a-cli-with-truffle-3)

## In order to build and run the library *LOCALLY*, run
1. `yarn install` or `npm install` depending on your preference
2. make sure you have testrpc running , and change `truffle.js` to point to that network. e.g. `localhost:8545`.
3. `truffle compile` to create the json contract artifacts
4. `truffle migrate` to deploy the contracts onto the network
4. `truffle test` to test the contracts on the network

## Linting your app is easy -- just run `npm run -s lint`!
