// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LikeContract {
    event LikeReceived(address indexed from, uint256 amount);

    // Fallback function to accept ETH
    receive() external payable {
        emit LikeReceived(msg.sender, msg.value);
    }

    // Or a specific payable function
    function like() external payable {
        require(msg.value > 0, "Send some ETH to like");
        emit LikeReceived(msg.sender, msg.value);
    }
}