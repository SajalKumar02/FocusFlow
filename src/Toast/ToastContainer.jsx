import React, { useContext } from "react";
import { ToastContext } from "./ToastProvider";

const ToastContainer = () => {
  const { toasts } = useContext(ToastContext);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.length === 0
        ? null
        : toasts.map((toast, idx) => (
            <div
              key={toast.id || idx}
              className={`px-4 py-2 rounded shadow-lg min-w-[240px] max-w-xs ${
                toast.type === "success"
                  ? "bg-green-600 text-white"
                  : toast.type === "deleted"
                    ? "bg-red-600 text-white"
                    : toast.type === "updated"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-900 text-white"
              }`}
            >
              {toast.message}
            </div>
          ))}
    </div>
  );
};

export default ToastContainer;
