import { useContext } from 'react';

import { ToastContext } from '@/feature/toast/context/provider';

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};
