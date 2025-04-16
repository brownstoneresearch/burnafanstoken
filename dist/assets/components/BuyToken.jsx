import React from 'react';

function BuyToken() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <a
        href="https://app.uniswap.org/explore/tokens/ethereum/0x00b8a9bb1dcab2cf2375284d70b39e6ef7d86aae"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={{ backgroundColor: '#222', color: 'orange', padding: '0.75rem 2rem', borderRadius: '1rem' }}>
          Buy $BURNA
        </button>
      </a>
    </div>
  );
}

export default BuyToken;