import { AboutPage } from 'pages/About';
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

	NOT_FOUND='not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',

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
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
