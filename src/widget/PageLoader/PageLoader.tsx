import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Spinner from 'widget/Spinner/Spinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string
}

const PageLoader = memo(({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Spinner />
  </div>
));

export default PageLoader;
