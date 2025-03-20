const { getTransaction, getTransactionReceipt } = require("./getTransactionDetails");

// Put a valid transaction hash from your testnet!
const txHash = "0x26183ee23194ca07e316daab81b117a740c35b8edfab21349c142a3eb1f68a95";

getTransaction(txHash);
getTransactionReceipt(txHash);