// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

contract StoreContract {
    event NewNameStored(
        bytes32 eventId,
        string cid,
        string name
    );
    struct StoreNames{
        bytes32 eventId;
        string cid;
        string name;
    }
    mapping (bytes32 => StoreNames) public idToEvent;
    function storeNewName(string calldata name, string calldata cid) public {
        bytes32 eventId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                name
            )
        );
        idToEvent[eventId] = StoreNames(
            eventId,
            cid,
            name
        );
        emit NewNameStored(
            eventId,
            cid,
            name
        );
    }
}