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

  // Show a success toast
  const showSuccessToast = useCallback(
    (message = "Task Completed") => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [
        ...prev,
        {
          id,
          type: "success",
          message,
        },
      ]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, 3000); // 3-second duration
    },
    [],
  );

  // Show an updated toast; accepts custom message
  const showUpdatedToast = useCallback((message = "Task Updated") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [
      ...prev,
      {
        id,
        type: "updated",
        message,
      },
    ]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000); // 3-second duration
  }, []);

  // Show a deleted/danger toast; accepts custom message
  const showDeletedToast = useCallback((message = "Task Deleted") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [
      ...prev,
      {
        id,
        type: "deleted",
        message,
      },
    ]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000); // 3-second duration
  }, []);

  const value = {
    toasts,
    showSuccessToast,
    showUpdatedToast,
    showDeletedToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext };
export default ToastProvider;
