import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Avatar, { AVATAR_Size } from 'shared/UI/Avatar/Avatar';
import Skeleton, { CIRCLE_Size } from 'shared/UI/Skeleton/Skeleton';
import Text from 'shared/UI/Text/Text';
import { Comment } from '../../types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string
  comment: Comment;
  isLoading?: boolean;
}

const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton
            isCircle
            size={CIRCLE_Size.CIRCLE_SIZE_S}
          />
          <Skeleton
            className={cls.username}
            height={16}
            width={100}
          />
        </div>
        <Skeleton
          className={cls.text}
          isArticle
          width="100%"
          height={50}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar
          ? <Avatar src={comment.user.avatar} size={AVATAR_Size.S} />
          : null}
        <Text
          className={cls.username}
          title={comment.user.username}
        />
      </div>
      <Text
        className={cls.text}
        text={comment.text}
      />
    </div>
  );
});

export default CommentCard;
