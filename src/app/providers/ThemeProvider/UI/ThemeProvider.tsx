import React, { FC, useMemo, useState } from 'react';
import { LOCAl_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAl_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    initialTheme,
    children,
  } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  document.body.className = theme;
  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
