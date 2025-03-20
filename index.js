require("dotenv").config();

const {
  createRandomWallet,
  loadWalletFromMnemonic,
  loadWalletFromPrivateKey,
} = require("./src/wallets/walletManager");
const { checkEthBalance } = require("./src/balance/checkBalance");

// 1️⃣ Create random wallet (for demo purposes)
createRandomWallet();

// 2️⃣ Load wallet from mnemonic (example)
const mnemonic = "test test test test test test test test test test test junk";
const mnemonicWallet = loadWalletFromMnemonic(mnemonic);

// 3️⃣ Load wallet from private key (from your .env)
const privateKeyWallet = loadWalletFromPrivateKey(process.env.PRIVATE_KEY);

// 4️⃣ Check ETH balance of loaded wallet
checkEthBalance(privateKeyWallet.address);