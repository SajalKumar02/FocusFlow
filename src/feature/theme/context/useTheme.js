import { useContext } from 'react';

import { ThemeContext } from '@/feature/theme/context/provider';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
