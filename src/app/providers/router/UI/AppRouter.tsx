import RequireAuth from 'app/providers/router/UI/RequireAuth';
import { getUserAuthData } from 'entities/User';
import React, {
  memo, Suspense, useCallback, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, AppRoutes, routeConfig } from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'widget/PageLoader/PageLoader';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const component = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">
          {route.element}
        </div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly
				  ? <RequireAuth>{component}</RequireAuth>
				  : component}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
