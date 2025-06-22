// backend/services/aiService.js

async function getAIResponse(message) {
  const text = message.toLowerCase().trim();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! How can I assist you today?";
  }

  if (text.includes("shipping") || text.includes("delivery")) {
    return "We typically ship all orders within 2-3 business days.";
  }

  if (text.includes("refund") || text.includes("return")) {
    return "You can request a refund within 30 days of your purchase.";
  }

  if (text.includes("hours") || text.includes("open") || text.includes("close")) {
    return "We're open from 9 AM to 5 PM, Monday through Friday.";
  }

  if (text.includes("contact") || text.includes("email") || text.includes("support")) {
    return "You can contact our support team at support@example.com.";
  }

  if (text.includes("track") || text.includes("order status")) {
    return "You can track your order using the tracking link sent to your email.";
  }

  return "I'm sorry, I didn't quite understand that. Can you rephrase your question?";
}

module.exports = { getAIResponse };
