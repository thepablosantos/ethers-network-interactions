require("dotenv").config();
const { checkEthBalance } = require("./checkBalance");

const address = process.argv[2]; 

if (!address) {
  console.error("❌ Please provide an Ethereum address.");
  process.exit(1);
}

checkEthBalance(address);