import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/UI/Button/Button';

interface ThemeSwitcherProps {
	className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {
				theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />
			}
    </Button>
  );
};

export default ThemeSwitcher;
