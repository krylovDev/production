import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/articles.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ISidebarItem } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const SidebarItemsList: ISidebarItem[] = [
      {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon,
      },
      {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
      },
    ];
    if (userData) {
      SidebarItemsList.push(
        {
          path: `${RoutePath.profile}/${userData.id}`,
          text: 'Профиль',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          text: 'Статьи',
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }
    return SidebarItemsList;
  },
);
