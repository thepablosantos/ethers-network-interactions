# ethers-network-interactions

Toolkit to interact with the Ethereum blockchain using **Ethers.js**.

## 🚀 Features

- 🔐 **Wallet Management**: Create wallets, import private keys, manage mnemonic phrases.
- 💰 **Check Wallet Balances**: Retrieve ETH & ERC-20 token balances.
- 📦 **Block & Transaction Details**: Get block information, transaction receipt & status.
- 🚀 **Send Transactions**: Simple ETH transfers.
- 📄 **Understanding ABIs**: What are ABIs and how to use them.
- 💡 **Smart Contract Interaction**:
  - Read/write contract data (ERC-20 tokens, structs, enums, arrays).
  - Send complex transactions (passing structs, arrays, enums as parameters).

---

## 📂 Project Structure

```
ethers-network-interactions/
├── src/
│   ├── config/           # RPC URLs, private keys, etc.
│   ├── wallets/          # Wallet creation & management
│   ├── balance/          # Balance checking scripts
│   ├── transactions/     # ETH & contract transaction scripts
│   ├── contracts/        # Contract ABIs, interaction logic
│   └── utils/            # Helper functions
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
| 7    | Explain & add sample ABI                                           | `docs: ABI explanation with example`     |
| 8    | Interact with ERC-20: read balance, send tokens                    | `feat: erc20 token interaction`          |
| 9    | Read complex contract data (structs, enums, arrays)                | `feat: read complex contract data`       |
| 10   | Write complex contract data (send struct, enum, array params)      | `feat: send complex contract data`       |
| 11   | Final polish: README, best practices, error handling, env usage    | `chore: project polishing and README`    |

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