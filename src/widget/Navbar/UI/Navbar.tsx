import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/UI/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

const Navbar = (props: NavbarProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsModalOpened(true);
  }, []);

  const handleLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          className={classNames(cls.links)}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={handleLogOut}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={classNames(cls.links)}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handleShowModal}
      >
        {t('Войти')}
      </Button>
      <LoginModal
        isOpen={isModalOpened}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Navbar;
