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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
