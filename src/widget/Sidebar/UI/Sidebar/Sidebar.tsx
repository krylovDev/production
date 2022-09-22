import React, { useState } from 'react';
import { classNames } from 'shared/ib/classNames/classNames';
import LangSwitcher from 'shared/UI/LangSwitcher/LangSwitcher';
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
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
    >
      <button
        type="button"
        onClick={onToggle}
      >
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}

export default Sidebar;
