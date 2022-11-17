import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

export enum ARTICLE_Size {
	ARTICLE_SIZE_M='article_size_m',
	ARTICLE_SIZE_L='article_size_l',
	ARTICLE_SIZE_text='article_size_text',
}

export enum CIRCLE_Size {
	CIRCLE_SIZE_S='circle_size_s',
	CIRCLE_SIZE_M='circle_size_m',
	CIRCLE_SIZE_L='circle_size_l',
	CIRCLE_SIZE_full='circle_size_full'
}

interface SkeletonProps {
	className?: string
	isCircle?: boolean
	isArticle?: boolean
	size?: ARTICLE_Size | CIRCLE_Size
	height?: string | number
	width?: string | number
	border?: number
}

const Skeleton = (props: SkeletonProps) => {
  const {
    className,
	  isCircle,
	  isArticle,
	  size,
	  border,
	  width,
	  height,
  } = props;

  const mods = {
    [cls.isArticle]: isArticle,
    [cls.isCircle]: isCircle,
	  [cls.circle_size_s]: isCircle && size === CIRCLE_Size.CIRCLE_SIZE_S,
	  [cls.circle_size_m]: isCircle && size === CIRCLE_Size.CIRCLE_SIZE_M,
	  [cls.circle_size_l]: isCircle && size === CIRCLE_Size.CIRCLE_SIZE_L,
	  [cls.article_size_l]: isArticle && size === ARTICLE_Size.ARTICLE_SIZE_L,
	  [cls.article_size_m]: isArticle && size === ARTICLE_Size.ARTICLE_SIZE_M,
	  [cls.article_size_text]: isArticle && size === ARTICLE_Size.ARTICLE_SIZE_text,
  };

  const styles = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(cls.Skeleton, mods, [className])}
      style={styles}
    />
  );
};

export default Skeleton;
