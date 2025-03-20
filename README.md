# ethers-network-interactions

Toolkit to interact with the Ethereum blockchain using **Ethers.js**.

## 🚀 Features

- 🔐 **Wallet Management**: Create wallets, import private keys, manage mnemonic phrases.
- 💰 **Check Wallet Balances**: Retrieve ETH balances.
- 📦 **Block & Transaction Details**: Get block information, transaction receipt & status.
- 🚀 **Send Transactions**: Simple ETH transfers.

---

## 📂 Project Structure

```
ethers-network-interactions/
├── src/
│   ├── config/           # RPC URLs, private keys, etc.
│   ├── wallets/          # Wallet creation & management
│   ├── balance/          # Balance checking scripts
│   ├── transactions/     # ETH transaction & details scripts
│   ├── blocks/           # Block data scripts
│   └── utils/            # Helper functions (optional)
├── .env.example          # Environment variables template
├── README.md
└── package.json
```

---

## 📝 Learning Path & Commit History

| Step | Description                                                        | Commit Name                               |
|------|--------------------------------------------------------------------|------------------------------------------|
| 1    | Initialize project, add dependencies, project structure            | `chore: project setup and dependencies`  |
| 2    | Wallet creation & import (mnemonic, private key)                   | `feat: wallet creation and import`       |
| 3    | Retrieve ETH balances                                              | `feat: check wallet ETH balance`         |
| 4    | Read block details (latest, by number/hash)                        | `feat: fetch block details`              |
| 5    | Read transaction details                                           | `feat: fetch transaction details`        |
| 6    | Send simple ETH transaction                                        | `feat: send ETH transaction`             |
| 7    | Final polish: README update, best practices, error handling        | `chore: project polishing and README`    |

---

## 🌐 Setup

1. Clone the repository:

```bash
git clone https://github.com/your-user/ethers-network-interactions.git
cd ethers-network-interactions
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```bash
cp .env.example .env
```

4. Fill in your `.env`:

```
PRIVATE_KEY=your_private_key_here
RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
```

---

## 🔧 Dependencies

- [ethers.js](https://docs.ethers.org/)
- dotenv
- Infura or Alchemy RPC URL

---

## 📄 License

MIT

---

## 🚀 Possible Future Enhancements

- ERC-20 token interaction
- Reading & writing complex smart contract data (structs, arrays, enums)
