import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./app/App.jsx";

// Theme Setup
import ThemeProvider from "./Theme/ThemeContext.jsx";
// Todo Setup
import TaskProvider from "./TaskState/TaskProvider.jsx";
// List Setup
import ListProvider from "./ListState/ListProvider.jsx";
// Toast Setup
import ToastProvider from "./Toast/ToastProvider";
import ToastContainer from "./Toast/ToastContainer";

const root = document.getElementById("root");

createRoot(root).render(
  // <StrictMode>
  <ThemeProvider>
    <ToastProvider>
      <ListProvider>
        <TaskProvider>
          <App />
          <ToastContainer />
        </TaskProvider>
      </ListProvider>
    </ToastProvider>
  </ThemeProvider>,
  // </StrictMode>,
);
