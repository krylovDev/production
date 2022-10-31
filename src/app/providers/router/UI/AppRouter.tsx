import { getUserAuthData } from 'entities/User';
import React, { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'widget/PageLoader/PageLoader';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter(({ authOnly }) => {
    if (authOnly && !isAuth) {
      return false;
    }
    return true;
  }), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={(<div className="page-wrapper">{element}</div>)}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
