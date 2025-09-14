// components/chat.tsx
"use client";

import React, { useState } from "react";
import "./Chat.css";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulated AI response
    setTimeout(() => {
      const botMessage: Message = {
        role: "bot",
        content: `Here’s a summary about **${userMessage.content}** 📘`,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">🤖 Research Assistant</div>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.role}`}>
            {msg.content}
          </div>
        ))}

        {isTyping && (
          <div className="chat-message bot">
            <em>Research Assistant is typing...</em>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me anything about research..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
