import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConnectWallet from './components/ConnectWallet';
import TokenBalance from './components/TokenBalance';
import BuyToken from './components/BuyToken';
import Home from './pages/Home';
import DAO from './pages/DAO';
import Features from './pages/Features';
import Roadmap from './pages/Roadmap';
import Burna from './pages/Burna';
import './styles.css'; // Optional if not already imported in main.jsx

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <a href="/">
            <img src="/logo-image.png" alt="$BURNA Logo" className="logo" />
          </a>
          <div className="header-right">
            <nav>
              <a href="/features">Features</a>
              <a href="/dao">DAO</a>
              <a href="/roadmap">Roadmap</a>
              <a href="/burna">Burna</a>
            </nav>
            <button id="connectWalletBtn">Connect Wallet</button>
          </div>
        </header>

        <ConnectWallet />
        <TokenBalance />
        <BuyToken />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dao" element={<DAO />} />
          <Route path="/features" element={<Features />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/burna" element={<Burna />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
