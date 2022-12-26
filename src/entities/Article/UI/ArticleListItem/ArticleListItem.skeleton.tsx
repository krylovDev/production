import { classNames } from 'shared/lib/classNames/classNames';
import Card from 'shared/UI/Card/Card';
import Skeleton, { CIRCLE_Size } from 'shared/UI/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
	className?: string
	view: ArticleView
}

const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const {
	  className,
    view,
  } = props;

  if (view === ArticleView.TILE) {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton
              className={cls.img}
              width={200}
              height={200}
            />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton
              className={cls.types}
              width={130}
              height={16}
            />
          </div>
          <Skeleton
            className={cls.title}
            width={150}
            height={16}
          />
        </Card>
      </div>
    );
  }

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton
              isCircle
              size={CIRCLE_Size.CIRCLE_SIZE_S}
            />
            <Skeleton
              className={cls.username}
              width={150}
              height={16}
            />
            <Skeleton
              className={cls.date}
              width={150}
              height={16}
            />
          </div>
          <Skeleton
            className={cls.title}
            width={250}
            height={24}
          />
          <Skeleton
            className={cls.img}
            height={200}
          />
          <div className={cls.footer}>
            <Skeleton
              width={200}
              height={36}
            />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])} />
  );
};

export default ArticleListItemSkeleton;
