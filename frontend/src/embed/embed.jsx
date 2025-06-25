import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "../components/ChatWidget.jsx";

// Get config from <script> tag
const currentScript = document.currentScript;

const config = {
  position: currentScript?.dataset?.position || "bottom-right",
  theme: currentScript?.dataset?.theme || "light",
  avatar: currentScript?.dataset?.avatar || null,
  welcomeMessage: currentScript?.dataset?.welcome || "Hi there!",
};

// Create target container
const chatDiv = document.createElement("div");
chatDiv.id = "ai-chat-widget-root";
document.body.appendChild(chatDiv);

// Mount ChatWidget
const root = ReactDOM.createRoot(chatDiv);
root.render(<ChatWidget {...config} />);
