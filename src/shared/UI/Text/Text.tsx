import { memo } from 'react';
import { classNames, Modes } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY= 'primary',
	ERROR= 'error',
}

export enum TextAlign {
	RIGHT= 'right',
	LEFT = 'left',
	CENTER = 'center'
}

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	align?: TextAlign
}

const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
	  align = TextAlign.LEFT,
  } = props;

  const mods: Modes = {
    [cls[theme]]: theme,
    [cls[align]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

export default Text;
