// src/blocks/getBlockDetails.js

const { ethers } = require("ethers");
require("dotenv").config();

function getProvider() {
  return new ethers.JsonRpcProvider(process.env.RPC_URL);
}

async function getLatestBlock() {
  try {
    const provider = getProvider();
    const latestBlockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(latestBlockNumber);
    console.log(`✅ Latest Block #${latestBlockNumber}:`);
    console.log(block);
  } catch (error) {
    console.error("❌ Error fetching latest block:", error.message);
  }
}

async function getBlockByNumber(blockNumber) {
  try {
    const provider = getProvider();
    const block = await provider.getBlock(blockNumber);
    console.log(`✅ Block #${blockNumber}:`);
    console.log(block);
  } catch (error) {
    console.error(`❌ Error fetching block #${blockNumber}:`, error.message);
  }
}

module.exports = {
  getLatestBlock,
  getBlockByNumber,
};