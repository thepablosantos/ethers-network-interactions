require("dotenv").config();
const {
  createRandomWallet,
  loadWalletFromMnemonic,
  loadWalletFromPrivateKey,
} = require("./src/wallets/walletManager");

// Create random wallet
createRandomWallet();

// Load wallet from mnemonic (example)
const mnemonic = "test test test test test test test test test test test junk";
loadWalletFromMnemonic(mnemonic);

// Load wallet from private key (from your .env file)
const privateKey = process.env.PRIVATE_KEY;
loadWalletFromPrivateKey(privateKey);