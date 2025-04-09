import React from 'react';
import ConnectWallet from './components/ConnectWallet';
import TokenBalance from './components/TokenBalance';
import BuyToken from './components/BuyToken';
function App() {
  return (
    <div>
      <h4 style={{ color: 'orange', textAlign: 'center' }}></h4>
      <ConnectWallet />
      <TokenBalance />
      <BuyToken />
</div>
  );
}

export default App;