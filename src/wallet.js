let walletConnected = false;
      const connectBtn = document.getElementById("connectWalletBtn");
      const buyBtn = document.getElementById("buyBtn");

      connectBtn.addEventListener("click", async () => {
        if (typeof window.ethereum !== "undefined") {
          try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            const short = accounts[0].slice(0, 6) + "..." + accounts[0].slice(-4);
            connectBtn.innerText = short;
            walletConnected = true;
            document.getElementById("buyError").style.display = "none";
          } catch (err) {
            alert("Wallet connection failed.");
          }
        } else {
          alert("Please install MetaMask.");
        }
      });

      buyBtn.addEventListener("click", () => {
        if (!walletConnected) {
          document.getElementById("buyError").innerText = "Please connect your wallet before buying $BURNA.";
          document.getElementById("buyError").style.display = "block";
          return;
        }
        window.open("https://app.uniswap.org/explore/tokens/ethereum/0x00b8a9bb1dcab2cf2375284d70b39e6ef7d86aae", "_blank");
      });