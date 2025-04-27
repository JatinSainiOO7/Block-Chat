# Blockchain Chat Web App

A decentralized chat web application built with **React** and **Blockchain technology** as a part of my final year project for the Bachelor of Technology (CSE) program.  
This project ensures secure, transparent, and tamper-proof communication between users by recording messages on a blockchain.

---

## 🚀 Project Features

- 🔐 **Secure Messaging** — Every message is saved on the blockchain.
- 🌐 **Decentralized** — No central server; peer-to-peer message verification.
- 🛡️ **Data Integrity** — Messages can't be altered or deleted once recorded.
- 💬 **Real-time Chat** — Instant messaging experience.
- 🎨 **Modern UI** — Built with React and styled for a smooth UX.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (with Vite)
- **Blockchain Layer:** Custom lightweight blockchain implemented in JavaScript
- **Smart Contracts:** (Optional — if used, mention Solidity/Ethereum here)
- **Styling:** SCSS
- **Backend (optional):** Node.js/Express.js (for APIs if needed)

---

## 📂 Project Structure

```bash
blockchain-chat-app/
├── public/
├── src/
│   ├── blockchain/   # Blockchain logic (block, chain, crypto utilities)
│   ├── components/   # React UI components (ChatBox, MessageList, InputField)
│   ├── pages/        # Page layouts (Home, ChatRoom)
│   ├── utils/        # Helper functions
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.ts
```

## 🧠 How Blockchain is Used
- Each message is a transaction.
- A group of messages forms a block.
- Each block links cryptographically to the previous block forming a chain.
- Proof-of-Work or simplified consensus used to verify blocks.