import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/ib/classNames/classNames';
import Button, { ThemeButton } from 'shared/UI/Button/Button';

interface ThemeSwitcherProps {
	className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
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
