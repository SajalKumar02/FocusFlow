/**
 * ToastProvider.jsx
 *
 * This file defines a context provider for managing toast notifications within a React application.
 *
 * - It creates a ToastContext using React's createContext.
 * - The ToastProvider component holds the state for an array of toast messages (toasts).
 * - It provides two main functions:
 *    - showSuccess: Adds a success toast with a default "Task Completed" message and removes it automatically after 3 seconds.
 *    - showDeleted: Adds a deleted/danger toast, optionally with a custom message, and removes it after 3 seconds.
 * - The toasts array and toast functions are exposed to children via the ToastContext so that any component in the provider tree can trigger and access toast notifications.
 * - This is used in conjunction with a container component (e.g., ToastContainer) which visually displays the toasts on the UI.
 */

import React, { createContext, useState, useCallback } from "react";

// Create a context for toasts
const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  /**
   * showToast
   * @param {"success"|"warning"|"danger"} type - Toast color type: "success" = green, "warning" = yellow, "danger" = red
   * @param {string} message - Message to display in the toast (will be shown exactly as passed)
   */
  const showToast = useCallback((type, message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [
      ...prev,
      {
        id,
        type, // success, warning, danger
        message, // show exactly as passed
      },
    ]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2000); // 2-second duration
  }, []);

  const value = {
    toasts,
    showToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext };
export default ToastProvider;
