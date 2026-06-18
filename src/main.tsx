import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

pendo.initialize({
  visitor: {
    id: "enterprise-ai-orchestrator-demo-visitor",
    role: "hackathon-reviewer",
    environment: "github-pages-demo"
  },
  account: {
    id: "enterprise-ai-orchestrator",
    name: "Enterprise AI Engineering Orchestrator"
  }
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
