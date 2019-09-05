const CapsuleContract = require("../client/src/contracts/Capsule.json");
const Web3 = require("web3");

const web3 = new Web3("ws://localhost:7545");
const contract = new web3.eth.Contract(
  CapsuleContract.abi,
  "0x30c82aA1adf1e9FDFd35Aa39FC7D6C22067f39Ed"
);

let predictions = [];

contract.methods
  .getPredictionsNumber()
  .call()
  .then(number => {
    console.log(number);
    for (let p = 0; p < number; p++) {
      contract.methods
        .predictions(p)
        .call()
        .then(prediction => {
          const { cid, name, date } = prediction;
          predictions.push({ cid, name, date });
          console.log(predictions);
        });
    }
  });
