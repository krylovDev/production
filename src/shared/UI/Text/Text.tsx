import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY= 'primary',
	ERROR= 'error',
}

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
}

const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
  } = props;
  return (
    <div className={classNames(cls.Text, { [cls[theme]]: theme }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

export default Text;
