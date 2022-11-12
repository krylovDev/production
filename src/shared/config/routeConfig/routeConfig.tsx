import { AboutPage } from 'pages/About';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Profile } from 'pages/Profile';
import { RouteProps } from 'react-router-dom';

export interface AppRouteProps extends RouteProps {
  authOnly?: boolean
}

export enum AppRoutes {
	MAIN='main',
	ABOUT='about',
  PROFILE='profile',
  ARTICLES='articles',
  ARTICLES_DETAILS='article_details',

	NOT_FOUND='not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: `/${AppRoutes.ABOUT}`,
  [AppRoutes.PROFILE]: `/${AppRoutes.PROFILE}`,
  [AppRoutes.ARTICLES]: `/${AppRoutes.ARTICLES}`,
  [AppRoutes.ARTICLES_DETAILS]: `/${AppRoutes.ARTICLES}`, // @TODO add :id

  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = { // RouteProps - тип из react-router-dom
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <Profile />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: `${RoutePath.article_details}/:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
