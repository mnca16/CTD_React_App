import { createContext, useState, useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Theme } from '../ui/themes';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(Theme.light);

  const toggleTheme = () => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.any,
};

export { ThemeContextProvider };

export const useTheme = () => {
  return useContext(ThemeContext);
};
