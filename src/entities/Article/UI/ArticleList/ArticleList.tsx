import { Article, ArticleView } from 'entities/Article/model/types/article';
import ArticleListItemSkeleton from 'entities/Article/UI/ArticleListItem/ArticleListItem.skeleton';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
	className?: string
  articles: Article[]
  isLoading?: boolean
  view: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton
      className={cls.card}
      view={view}
      key={index}
    />
  ));

const ArticleList = (props: ArticleListProps) => {
  const { t } = useTranslation();
  const {
    className,
    articles,
    view = ArticleView.TILE,
    isLoading,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      className={cls.card}
      key={article.id}
      article={article}
      view={view}
    />
  );

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        { getSkeletons(view) }
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {
        articles.length > 0
          ? articles.map(renderArticle)
          : null
      }
    </div>
  );
};

export default ArticleList;
