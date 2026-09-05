import React from 'react';
import { useToast } from '@/feature/toast/context/useToast';

const toastTypeStyles = {
  success: 'bg-green-600 border-green-700 text-white',
  warning: 'bg-yellow-50 border-yellow-300 text-yellow-900',
  deleted: 'bg-rose-600 border-rose-700 text-white',
  updated: 'bg-blue-600 border-blue-700 text-white',
  default: 'bg-neutral-800 border-neutral-700 text-white',
};

const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {toasts.map((toast, idx) => {
        const type = toast.type || 'default';
        return (
          <div
            key={toast.id || idx}
            className={`px-5 py-3 rounded-lg shadow-xl border font-semibold text-sm flex items-center min-w-[260px] max-w-sm transition-opacity duration-300 ${toastTypeStyles[type] || toastTypeStyles.default}`}
            role="alert"
            aria-live="assertive"
          >
            <span>{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ToastContainer;
