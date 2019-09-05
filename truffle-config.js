const path = require("path");

const HDWalletProvider = require("truffle-hdwallet-provider");

const fs = require("fs");
const key = fs
  .readFileSync(".secret")
  .toString()
  .trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 7545
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(
          key,
          "https://ropsten.infura.io/v3/81dc839bdddd4a53ae65338f9b9d533b"
        );
      },
      from: "0xCA37294FC7d10172160aAB585d8C0942810e3357",
      network_id: "3"
    }
  }
};
