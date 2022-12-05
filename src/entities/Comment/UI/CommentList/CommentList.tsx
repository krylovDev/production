import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/UI/Text/Text';
import CommentCard from '../CommentCard/CommentCard';
import { Comment } from '../../types/comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
	className?: string
  comments?: Comment[]
  isLoading?: boolean
}

const CommentList = memo((props: CommentListProps) => {
  const { t } = useTranslation();
  const {
    className,
    comments,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {
        comments?.length
          ? comments.map((comment) => (
            <CommentCard
              key={comment.id}
              isLoading={isLoading}
              className={cls.comment}
              comment={comment}
            />
          ))
          : (
            <Text
              text={t('Комментарии отсутствуют')}
            />
          )
      }
    </div>
  );
});

export default CommentList;
