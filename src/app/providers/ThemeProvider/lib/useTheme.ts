import { useContext } from 'react';
import { LOCAl_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface useThemeResult {
	toggleTheme: () => void
	theme: Theme
}
export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAl_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
