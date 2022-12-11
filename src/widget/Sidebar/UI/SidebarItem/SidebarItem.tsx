import { getUserAuthData } from 'entities/User';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { ISidebarItem } from 'widget/Sidebar/model/types/sidebar';
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

  const isAuth = useSelector(getUserAuthData);

  // Cкрывает ссылки из Sidebar неавторизованны юзерам
  if (item.authOnly && !isAuth) {
    return null;
  }

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
