const FirstContract = artifacts.require("FirstContract");

module.exports = function (deployer) {
  deployer.deploy(FirstContract, "FirstContract constructor"); //parameter to constructor
};
