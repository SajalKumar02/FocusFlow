import React, { useState, useCallback } from 'react';
import ToastContext from './context';

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((type, message) => {
    const id = `${Date.now()}-${Math.random()}`;

    setToasts((prev) => [
      ...prev,
      {
        id,
        type,
        message,
      },
    ]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2000);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        showToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext };
export default ToastProvider;
