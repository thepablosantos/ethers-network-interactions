// src/transactions/sendTransaction.js

const { ethers } = require("ethers");
require("dotenv").config();

function getProvider() {
  return new ethers.JsonRpcProvider(process.env.RPC_URL);
}

function getWallet() {
  const provider = getProvider();
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  return wallet;
}

async function sendEthTransaction(toAddress, amountInEth) {
  try {
    const wallet = getWallet();

    console.log(`✅ Sending ${amountInEth} ETH from ${wallet.address} to ${toAddress}...`);

    const tx = await wallet.sendTransaction({
      to: toAddress,
      value: ethers.parseEther(amountInEth),
    });

    console.log("📨 Transaction sent! Waiting for confirmation...");
    await tx.wait();

    console.log(`🎉 Transaction successful! Hash: ${tx.hash}`);
  } catch (error) {
    console.error("❌ Error sending transaction:", error.message);
  }
}

module.exports = {
  sendEthTransaction,
};