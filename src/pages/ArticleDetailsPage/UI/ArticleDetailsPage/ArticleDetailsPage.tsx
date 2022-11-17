import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import Text from 'shared/UI/Text/Text';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  getArticleCommentsIsError,
  getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const {
    className,
  } = props;
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails
          id={id}
        />
        <Text
          title={t('Комментарии')}
          className={cls.commentTitle}
        />
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
