// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";

import { TodoProvider } from "./features/context/createContext.jsx";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>,
);
