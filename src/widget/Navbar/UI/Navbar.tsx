import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          to={RoutePath[AppRoutes.MAIN]}
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.mainLink)}
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          to={RoutePath[AppRoutes.ABOUT]}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
