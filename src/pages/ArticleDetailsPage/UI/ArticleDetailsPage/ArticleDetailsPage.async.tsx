import { FC, lazy } from 'react';
import { ArticleDetailsPageProps } from '../../UI/ArticleDetailsPage/ArticleDetailsPage';

export const ArticleDetailsPageAsync =	lazy<FC<ArticleDetailsPageProps>>(
  () => import('./ArticleDetailsPage'),
);
