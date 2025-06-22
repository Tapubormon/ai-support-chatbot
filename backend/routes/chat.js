// backend/routes/chat.js
const express = require("express");
const { getAIResponse } = require("../services/aiService");

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const reply = await getAIResponse(message);
    res.json({ reply });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ reply: "Oops! Something went wrong." });
  }
});

module.exports = router;
