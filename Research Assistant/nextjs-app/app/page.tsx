"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Welcome Atharva RJ to Research Assistant! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="container">
      {/* Left Info Section */}
      <div className="info-box">
        <h2>Research Assistant</h2>
        <p>Ready to assist with comprehensive research on any topic.</p>
      </div>

      {/* Chat Section */}
      <div className="chat-box">
        <div className="chat-header">💬 Chat Assistant</div>
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.sender === "bot" ? "bot" : "user"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
