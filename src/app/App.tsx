import { AppRouter } from 'app/providers/router';
import {
  getUserInited,
  userActions,
} from 'entities/User';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar';
import './styles/index.scss';
import {
  Suspense, useEffect, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isUserInited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.isAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isUserInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
