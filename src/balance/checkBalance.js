// src/balance/checkBalance.js

const { ethers } = require("ethers");
require("dotenv").config();

// Load wallet & provider
function getProvider() {
  return new ethers.JsonRpcProvider(process.env.RPC_URL);
}

async function checkEthBalance(address) {
  try {
    const provider = getProvider();
    const balance = await provider.getBalance(address);
    const ethBalance = ethers.formatEther(balance);
    console.log(`✅ ETH Balance of ${address}: ${ethBalance} ETH`);
    return ethBalance;
  } catch (error) {
    console.error("❌ Error fetching balance:", error.message);
  }
}

module.exports = {
  checkEthBalance,
};