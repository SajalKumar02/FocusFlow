import { useState, useEffect } from 'react';
import ThemeContext from './context';

import { LOCAL_STORAGE_KEY, DEFAULT_THEME } from '../constants/initialThemes';

const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    try {
      const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedTheme ? storedTheme : DEFAULT_THEME;
    } catch {
      return DEFAULT_THEME;
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
