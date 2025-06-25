import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()], // This enables JSX support!
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/embed/embed.jsx"),
      name: "ChatbotWidget",
      fileName: "chatbot",
      formats: ["iife"], // Self-executing script for embedding
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
