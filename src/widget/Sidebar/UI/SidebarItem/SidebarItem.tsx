import React, { memo } from 'react';
import AboutIcon from 'shared/assets/icons/about.svg';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { ISidebarItem } from 'widget/Sidebar/model/SidebarItems';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	item: ISidebarItem
  collapsed: boolean
}

const SidebarItem = memo((props: SidebarItemProps) => {
  const { t } = useTranslation();
  const {
    item,
    collapsed,
  } = props;

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
    >
      <item.Icon className={cls.icon} />
      <span className={classNames(cls.link)}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});

export default SidebarItem;
