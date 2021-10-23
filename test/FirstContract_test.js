const FirstContract = artifacts.require("FirstContract");

contract("FirstContract",  accounts => {
    it("constructor should set the message", async () => {
       let instance = await FirstContract.deployed();
       let message = await instance.message();
       assert.equal(message, "FirstContract constructor");
    });

    it("owner should be account[0]", async() => {
        let instace = await FirstContract.deployed();
        let owner = await instace.owner();
        assert.equal(owner, accounts[0]);
    });

});

contract("FirstContract",  accounts => {
    
});