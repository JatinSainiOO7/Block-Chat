import './App.css'

function App() {


  return (
    <>
      <center>
        <h1>Block Chat</h1>
        <h1>🎯 Objective</h1>
        <p>
          The primary goal of this project is to design and develop a decentralized, secure, and tamper-proof chat application using Blockchain technology combined with a modern React.js frontend.
          The application aims to remove the need for centralized servers, ensuring that all communication is transparent, secure, and resistant to modification.
        </p>

        <h1>🛠️ Project Overview</h1>
        <p>
          In today's digital world, chat applications are fundamental. However, most rely on central servers, making them vulnerable to attacks, data breaches, and censorship.
          This project addresses these issues by creating a decentralized chat platform where each message is treated as a transaction, stored in blocks, and linked together to form an immutable blockchain.
        </p>

        <p>
          Key Components:

          Blockchain Layer: Responsible for securely storing chat messages inside a chain of blocks.

          React Frontend: Provides a real-time, clean, and responsive chat interface.

          Node.js (Optional): For backend APIs if scaling up or connecting multiple clients is required.

          SCSS Styling: To give the frontend a modern, mobile-responsive look.
        </p>
        <h1>⚙️ How the Blockchain Chat Works</h1>
        <p>
          Message Creation:
          When a user sends a message, it is bundled with other recent messages to create a "block" of chat data.

          Block Creation:
          The new block contains a set of messages, timestamp, previous block’s hash, and its own cryptographic hash.

          Proof-of-Work (Optional/Lightweight):
          A simple consensus mechanism validates the block to prevent spam or malicious blocks.

          Block Addition:
          After validation, the new block is linked to the previous block, making the entire chain immutable.

          Message Display:
          Messages are displayed to users in real-time through React’s frontend interface.
        </p>
      </center>
    </>
  )
}

export default App
