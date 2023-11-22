// ChatBox.js

import React, { useState } from "react";

const ChatBox = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div>
      <div
        style={{ height: "300px", border: "1px solid #ccc", overflow: "auto" }}
      >
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
