// src/wallets/walletManager.js

const { ethers } = require("ethers");

// 1️⃣ - Create a new random wallet
function createRandomWallet() {
  const wallet = ethers.Wallet.createRandom();
  console.log("✅ New Wallet Generated:");
  console.log(`Address: ${wallet.address}`);
  console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
  console.log(`Private Key: ${wallet.privateKey}`);
  return wallet;
}

// 2️⃣ - Load wallet from mnemonic
function loadWalletFromMnemonic(mnemonic) {
  try {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    console.log("✅ Wallet loaded from mnemonic:");
    console.log(`Address: ${wallet.address}`);
    return wallet;
  } catch (error) {
    console.error("❌ Invalid mnemonic!", error.message);
  }
}

// 3️⃣ - Load wallet from private key
function loadWalletFromPrivateKey(privateKey) {
  try {
    const wallet = new ethers.Wallet(privateKey);
    console.log("✅ Wallet loaded from private key:");
    console.log(`Address: ${wallet.address}`);
    return wallet;
  } catch (error) {
    console.error("❌ Invalid private key!", error.message);
  }
}

module.exports = {
  createRandomWallet,
  loadWalletFromMnemonic,
  loadWalletFromPrivateKey,
};