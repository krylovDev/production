import React, {useState} from 'react'
import {classNames} from 'shared/ib/classNames/classNames'
import {ThemeSwitcher} from 'widget'
import cls from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

const Sidebar = ({className}: SidebarProps) => {

	const [isCollapsed, setIsCollapsed] = useState(false)

	const onToggle = () => setIsCollapsed(prev => !prev)

	return (
		<div
			className={classNames(cls.Sidebar, {[cls.collapsed]: isCollapsed}, [className])}
		>
			<button
			onClick={onToggle}
			>
				toggle
			</button>
			<div className={cls.switchers} >
				<ThemeSwitcher/>
				{/*langSwitcher*/}
			</div>
		</div>
	)
}

export default Sidebar
