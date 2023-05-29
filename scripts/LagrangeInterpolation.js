
const Web3 = require("web3");
const ganache = require("ganache");
const web3 = new Web3('http://127.0.0.1:8545');
const networkId = '4447'; // Repla/ce with the desired network ID
const prompt = require('prompt-sync')();
const LagrangePolynomialJson = require('../build/contracts/LagrangePolynomial.json');

function getContractAddr(networkId){
  let deployedOnNetwork = LagrangePolynomialJson.networks[networkId];
  if(!deployedOnNetwork) {
    throw new Error(`Contract deployment not found on network ${networkId}`);
  }
  const deployedContractAddress = deployedOnNetwork.address;
  return deployedContractAddress;
}

function initContract(contractAbi,deployedContractAddress){
  let instance = new web3.eth.Contract(contractAbi, deployedContractAddress);
  return instance;
}

async function getAccounts() {
  const accounts = await web3.eth.getAccounts();
  return accounts;
}

async function main(){
  var xValues = JSON.parse(prompt('Enter xValues (as an array):'));
  var yValues = JSON.parse(prompt('Enter yValues (as an array):'));
  var xArray = JSON.parse(prompt('Enter x Values (as an array):'));
  let LagrangePolynomialAddr = getContractAddr(networkId);
  var LagrangePolynomial = await initContract(LagrangePolynomialJson.abi,LagrangePolynomialAddr);
  var cur_accounts =  await getAccounts();
  
  for(let i=0;i<xArray.length;i++){
  	var interpolatedValue = await LagrangePolynomial.methods.calculateLagrangePolynomial(xValues,yValues,xArray[i]).call();
  	console.log(`interpolatedValue(${xArray[i]}) = ${interpolatedValue / Math.pow(10, 6)}`);
  }
}

main()