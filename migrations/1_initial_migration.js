const LagrangePolynomial = artifacts.require("lagrangePolynomial");

module.exports = async function (deployer) {
  deployer.deploy(LagrangePolynomial);
};
