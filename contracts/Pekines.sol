// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Pekines is ERC20 {

  address public minter;

  constructor() payable ERC20("Pekinesios", "PEK") {
    minter = msg.sender;
  }

  function mint(address _account, uint256 _amount) public {
    require(msg.sender == minter, "Error, user does not have minter role");
    _mint(_account, _amount);   
  }
}
