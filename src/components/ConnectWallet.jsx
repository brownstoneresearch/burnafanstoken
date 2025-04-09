import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (err) {
      console.error('Wallet connection failed:', err);
    }
  };

  return (
    <button onClick={connectWallet} style={{
      backgroundColor: 'orange',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '10px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer'
    }}>
      {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWallet;
