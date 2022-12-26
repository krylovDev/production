import { Article, ArticleView } from 'entities/Article/model/types/article';
import ArticleList from 'entities/Article/UI/ArticleList/ArticleList';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { t } = useTranslation();

  const {
    className,
  } = props;
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList
        isLoading
        articles={[]}
        view={ArticleView.LIST}
      />
    </div>
  );
};

export default memo(ArticlesPage);
