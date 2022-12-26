import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EyeIcon from 'shared/assets/icons/article-eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import Avatar, { AVATAR_Size } from 'shared/UI/Avatar/Avatar';
import Button from 'shared/UI/Button/Button';
import Card from 'shared/UI/Card/Card';
import Icon from 'shared/UI/Icon/Icon';
import Text from 'shared/UI/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string
  article: Article
  view: ArticleView
}

const ArticleListItem = (props: ArticleListItemProps) => {
  const { t } = useTranslation();
  const {
    className,
    article,
    view,
  } = props;

  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}/${article.id}`);
  }, [
    article.id,
    navigate,
  ]);

  const types = (
    <Text
      text={article.type.join(', ')}
      className={cls.types}
    />
  );

  const views = (
    <>
      <Text
        text={`${article.views}`}
        className={cls.views}
      />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.TILE) {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card
          className={cls.card}
          onClick={onOpenArticle}
        >
          <div className={cls.imageWrapper}>
            <img
              src={article.img}
              alt={article.title}
              className={cls.img}
            />
            <Text
              text={article.createdAt}
              className={cls.date}
            />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
        </Card>
      </div>
    );
  }

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar
              size={AVATAR_Size.S}
              src={article.user.avatar}
            />
            <Text
              text={article.user.username}
              className={cls.username}
            />
            <Text
              text={article.createdAt}
              className={cls.date}
            />
          </div>
          <Text
            text={article.title}
            className={cls.title}
          />
          {types}
          <img
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              className={cls.textBlock}
              block={textBlock}
            />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle}>
              {t('Читать далее')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      {article.title}
    </div>
  );
};

export default ArticleListItem;
