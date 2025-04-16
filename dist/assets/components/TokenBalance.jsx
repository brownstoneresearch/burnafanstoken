import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const TOKEN_ADDRESS = '0x00b8A9Bb1DcaB2Cf2375284d70B39e6ef7d86aAE';
const TOKEN_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

function TokenBalance() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
        const decimals = await contract.decimals();
        const rawBalance = await contract.balanceOf(signer.address);
        setBalance(ethers.formatUnits(rawBalance, decimals));
      }
    };

    getBalance();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem', color: 'white' }}>
      {balance !== null ? <p>Your $BURNA Balance: {balance}</p> : <p>Connect wallet to view balance.</p>}
    </div>
  );
}

export default TokenBalance;