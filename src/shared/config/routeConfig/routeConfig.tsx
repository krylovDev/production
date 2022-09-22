import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
	MAIN='main',
	ABOUT='about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = { // RouteProps - тип из react-router-dom
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
