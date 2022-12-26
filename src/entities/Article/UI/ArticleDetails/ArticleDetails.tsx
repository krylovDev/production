import {
  memo,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DateIcon from 'shared/assets/icons/article-date-line.svg';
import EyeIcon from 'shared/assets/icons/article-eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import Avatar from 'shared/UI/Avatar/Avatar';
import Button from 'shared/UI/Button/Button';
import Icon from 'shared/UI/Icon/Icon';
import Skeleton, { ARTICLE_Size, CIRCLE_Size } from 'shared/UI/Skeleton/Skeleton';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/UI/Text/Text';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
	className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const {
    className,
    id,
  } = props;
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
          />
        );
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.title}
          isArticle
          size={ARTICLE_Size.ARTICLE_SIZE_M}
        />
        <Skeleton
          className={cls.title}
          isArticle
          size={ARTICLE_Size.ARTICLE_SIZE_L}
        />
        <Skeleton
          className={cls.title}
          isArticle
          size={ARTICLE_Size.ARTICLE_SIZE_text}
        />
        <Skeleton
          className={cls.avatar}
          isCircle
          size={CIRCLE_Size.CIRCLE_SIZE_M}
        />
        <Skeleton
          className={cls.avatar}
          isCircle
          size={CIRCLE_Size.CIRCLE_SIZE_L}
        />
      </>
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            size={200}
            src={article?.img}
            className={cls.avatar}
          />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon} />
          <Text
            text={`${article?.views}`}
          />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={DateIcon} className={cls.icon} />
          <Text
            text={article?.createdAt}
          />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        <div>{content}</div>
      </div>
    </DynamicModuleLoader>
  );
});
