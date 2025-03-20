// src/transactions/getTransactionDetails.js

const { ethers } = require("ethers");
require("dotenv").config();

function getProvider() {
  return new ethers.JsonRpcProvider(process.env.RPC_URL);
}

async function getTransaction(txHash) {
  try {
    const provider = getProvider();
    const tx = await provider.getTransaction(txHash);
    console.log(`✅ Transaction ${txHash}:`);
    console.log(tx);
  } catch (error) {
    console.error(`❌ Error fetching transaction ${txHash}:`, error.message);
  }
}

async function getTransactionReceipt(txHash) {
  try {
    const provider = getProvider();
    const receipt = await provider.getTransactionReceipt(txHash);
    console.log(`✅ Transaction Receipt ${txHash}:`);
    console.log(receipt);
  } catch (error) {
    console.error(`❌ Error fetching transaction receipt ${txHash}:`, error.message);
  }
}

module.exports = {
  getTransaction,
  getTransactionReceipt,
};