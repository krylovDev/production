import {
  CSSProperties, memo,
  useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';

interface AvatarProps {
	className?: string
	src?: string
	username?: string
	size?: number
}

const Avatar = memo((props: AvatarProps) => {
  const {
    className,
	  src,
	  username,
	  size,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      style={styles}
      src={src}
      alt={`Аватар пользователя ${username || 'guest'}`}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
});

export default Avatar;
