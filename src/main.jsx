import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./app/App.jsx";

// Todo Setup
import TodoProvider from "./TodoState/TodoProvider.jsx";

// Toast Setup
import ToastProvider from "./Toast/ToastProvider";
import ToastContainer from "./Toast/ToastContainer";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <ToastProvider>
      <TodoProvider>
        <App />
        <ToastContainer />
      </TodoProvider>
    </ToastProvider>
  </StrictMode>,
);
