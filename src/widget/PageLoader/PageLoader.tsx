import { classNames } from 'shared/ib/classNames/classNames';
import Spinner from 'widget/Spinner/Spinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string
}

const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Spinner />
  </div>
);

export default PageLoader;
