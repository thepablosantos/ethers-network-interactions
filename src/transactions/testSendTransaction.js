const { sendEthTransaction } = require("./sendTransaction");

// Replace for your testnet address (Sepolia, Goerli, etc)
const toAddress = "0x2Dce4185E0922962912f4Aa0077ee2A08b4F39B8"; 
const amount = "0.001"; // 0.001 ETH

sendEthTransaction(toAddress, amount);