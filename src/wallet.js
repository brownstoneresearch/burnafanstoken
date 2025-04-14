
const tokenAddress = "0x00b8A9Bb1DcaB2Cf2375284d70B39e6ef7d86aAE";
const tokenABI = [
  { "constant": true, "inputs": [{ "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "type": "function" },
  { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }
];

let web3, account;

async function connectWallet() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];
      document.getElementById('wallet-address').innerText = 'Connected: ' + account;
      getBalance(account);
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('MetaMask not found!');
  }
}

async function getBalance(user) {
  const contract = new web3.eth.Contract(tokenABI, tokenAddress);
  const balance = await contract.methods.balanceOf(user).call();
  const decimals = await contract.methods.decimals().call();
  const formatted = balance / (10 ** decimals);
  document.getElementById('token-balance').innerText = `$BURNA Balance: ${formatted}`;
  const gated = document.getElementById('gated-content');
  if (gated) gated.style.display = formatted > 0 ? 'block' : 'none';
}
