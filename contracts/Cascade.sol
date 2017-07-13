pragma solidity ^0.4.11;

contract Cascade {
  struct Message {
    string message;
    bytes32 to32;
    bool sent;
    string privKey;
  }

  uint numMessages;
  mapping (bytes32 => Message) public messages;

  function Cascade(string message, string to) {
    numMessages = 0;
    bytes32 to32 = keccak256(to);
    Message memory newOne = Message(message, to32, false, "ABC");
    messages[to32] = newOne;
  }
}
