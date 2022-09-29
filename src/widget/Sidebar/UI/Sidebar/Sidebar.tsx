import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LangSwitcher from 'shared/UI/LangSwitcher/LangSwitcher';
import Button from 'shared/UI/Button/Button';
import { ThemeSwitcher } from 'widget';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string
}

function Sidebar({ className }: SidebarProps) {
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
      >
        toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}

export default Sidebar;
