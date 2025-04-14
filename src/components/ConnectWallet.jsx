import React, { useState, useEffect } from 'react';

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <button onClick={connectWallet} style={{ padding: '0.75rem 1.5rem', backgroundColor: 'orange', color: 'white', borderRadius: '10px' }}>
        {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
      </button>
    </div>
  );
}

export default ConnectWallet;