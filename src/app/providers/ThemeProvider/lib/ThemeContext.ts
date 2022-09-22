import { createContext } from 'react';

export enum Theme {
	LIGHT='light',
	DARK='dark'
}

export interface ThemeContextProps {
	theme?: Theme
	setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAl_STORAGE_THEME_KEY = 'theme';
