import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import Button, { ButtonSize, ButtonTheme } from 'shared/UI/Button/Button';
import LangSwitcher from 'shared/UI/LangSwitcher/LangSwitcher';
import ThemeSwitcher from 'shared/UI/ThemeSwitcher/ThemeSwitcher';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string
}

function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          to={RoutePath[AppRoutes.MAIN]}
          theme={AppLinkTheme.SECONDARY}
        >
          <MainIcon className={cls.icon} />
          <span className={classNames(cls.link)}>
            {t('Главная')}
          </span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath[AppRoutes.ABOUT]}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon className={cls.icon} />
          <span className={classNames(cls.link)}>
            {t('О сайте')}
          </span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          short={isCollapsed}
        />
      </div>
    </div>
  );
}

export default Sidebar;
