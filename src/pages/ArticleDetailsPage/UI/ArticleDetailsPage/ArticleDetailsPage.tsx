import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
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

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails
        id={id}
      />
    </div>
  );
};

export default ArticleDetailsPage;
