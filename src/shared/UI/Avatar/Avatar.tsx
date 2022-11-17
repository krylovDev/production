import {
  CSSProperties, memo,
  useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';

export enum AVATAR_Size {
	S = 'avatar_size_s',
}

interface AvatarProps {
	className?: string
	src?: string
	username?: string
	size?: AVATAR_Size | number // TODO Исрпавить
}

const Avatar = memo((props: AvatarProps) => {
  const {
    className,
	  src,
	  username,
	  size,
  } = props;

  // @TODO Переписать все стили на enum
  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  const mods = {
    [cls.avatar_size_s]: size === AVATAR_Size.S,
  };

  return (
    <img
      style={styles}
      src={src}
      alt={`Аватар пользователя ${username || 'guest'}`}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
});

export default Avatar;
