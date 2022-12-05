import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/UI/AppLink/AppLink';
import Avatar, { AVATAR_Size } from 'shared/UI/Avatar/Avatar';
import Skeleton, { CIRCLE_Size } from 'shared/UI/Skeleton/Skeleton';
import Text from 'shared/UI/Text/Text';
import { Comment } from '../../types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string
  comment?: Comment;
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
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
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

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink
        className={cls.header}
        to={`${RoutePath.profile}/${comment?.user.id}`}
      >
        {comment?.user.avatar
          ? <Avatar src={comment?.user.avatar} size={AVATAR_Size.S} />
          : null}
        <Text
          className={cls.username}
          title={comment?.user.username}
        />
      </AppLink>
      <Text
        className={cls.text}
        text={comment?.text}
      />
    </div>
  );
});

export default CommentCard;
