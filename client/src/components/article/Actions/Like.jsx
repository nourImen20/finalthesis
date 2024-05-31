import React, { useState } from 'react';
import { ethers } from 'ethers';
import { PiHandsClappingDuotone } from 'react-icons/pi';

const abi = 
[
	{
		"inputs": [],
		"name": "like",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "LikeReceived",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

const Like = () => {
  const [likes, setLikes] = useState(2200); // Assuming initial like count is 2200
  const [walletConnected, setWalletConnected] = useState(false);
  const [likeSent, setLikeSent] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setWalletConnected(true);
        console.log('Wallet connected');
      } catch (error) {
        console.error('Error connecting wallet', error);
      }
    } else {
      alert('Please install a MetaMask wallet to interact with this feature');
    }
  };

  const sendLikeTransaction = async () => {
    if (!walletConnected) {
      await connectWallet();
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tx = {
      to: '0xd9145CCE52D386f254917e481eB44e9943F39138', // Replace with your contract address
      value: ethers.utils.parseEther('0.0001'), // Replace with the required amount
      gasLimit: ethers.utils.hexlify(21000) // Manually set gas limit (adjust as needed)
    };
    try {
      const transaction = await signer.sendTransaction(tx);
      await transaction.wait();
      setLikes((prevLikes) => prevLikes + 1); // Use functional form to ensure updated state
      setLikeSent(true);
      console.log('Like transaction sent');
    } catch (error) {
      console.error('Error sending like transaction', error);
    }
  };

  return (
    <button
      className="btn d-flex align-items-center gap-1 text-sm"
      onClick={sendLikeTransaction}
    >
      <PiHandsClappingDuotone
  className="text-x1"
  style={{ color: likeSent ? 'red' : '', textColor: likeSent ? 'red' : '' }}
/>


      <span>{likes.toLocaleString()}</span>
    </button>
  );
};

export default Like;
