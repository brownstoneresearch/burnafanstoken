import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConnectWallet from './components/ConnectWallet';
import TokenBalance from './components/TokenBalance';
import BuyToken from './components/BuyToken';
import Home from './pages/Home';
import DAO from './pages/DAO';
import Features from './pages/Features';
import Roadmap from './pages/Roadmap';
import Burna from './pages/Burna';

export default function App() {
  return (
    <div>
      <h4 style={{ color: 'orange', textAlign: 'center' }}>
        {/* Optional subheading goes here */}
      </h4>
      <ConnectWallet />
      <TokenBalance />
      <BuyToken />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dao" element={<DAO />} />
          <Route path="/features" element={<Features />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/burna" element={<Burna />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
