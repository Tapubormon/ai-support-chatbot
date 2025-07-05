import { useState } from "react";
import "./ChatWidget.css";
import chatIcon from '../assets/chat.png';
import chatMinus from '../assets/minus.png';
import chatCross from '../assets/cross.png';

const ChatWidget = ({
  position = "bottom-right",
  theme = "light",
  avatar = null,
  welcomeMessage = "Hello! How can I help you?",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { from: "bot", text: data.reply || "Sorry, try again." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Something went wrong. Please try later." },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

return (
  <div className="chat-widget">
    {!isOpen && (
      <button className="chat-toggle" onClick={toggleChat}>
        <img src={chatIcon} alt="Chat" className="chaticon" />
      </button>
    )}

    {isOpen && (
      <div className="chat-box">
        <div className="chat-top-bar">
          <img src={chatMinus} alt="Minimize" onClick={toggleChat} />
          <img src={chatCross} alt="Close" onClick={toggleChat} />
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.from === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={input}
            placeholder="Ask me something..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    )}
  </div>
);

};

export default ChatWidget;
