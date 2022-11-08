import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const {
    className,
  } = props;
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <div>ArticleDetailsPage</div>
    </div>
  );
};

export default ArticleDetailsPage;
