import { getUserAuthData } from 'entities/User';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  Navigate,
  useLocation,
} from 'react-router-dom';

interface RequireAuthProps {
	children: JSX.Element
}

const RequireAuth: FC<RequireAuthProps> = (props) => {
  const {
    children,
  } = props;

  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to="/"
        state={{ from: location }}
        replace
      />
    );
  }
  return children;
};

export default RequireAuth;
