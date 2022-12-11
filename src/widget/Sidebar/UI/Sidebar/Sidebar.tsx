import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonSize, ButtonTheme } from 'shared/UI/Button/Button';
import LangSwitcher from 'shared/UI/LangSwitcher/LangSwitcher';
import ThemeSwitcher from 'shared/UI/ThemeSwitcher/ThemeSwitcher';
import { getSidebarItems } from 'widget/Sidebar/model/selectors/getSidebarItems';
import SidebarItem from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => setIsCollapsed((prev) => !prev);

  const itemsList = useMemo(() => sidebarItemList.map((item) => (
    <SidebarItem
      key={item.text}
      item={item}
      collapsed={isCollapsed}
    />
  )), [
    isCollapsed,
    sidebarItemList,
  ]);

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
        {itemsList}
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
});

export default Sidebar;
