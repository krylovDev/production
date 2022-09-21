import React from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/ib/classNames/classNames'
import AppLink, {AppLinkTheme} from 'shared/UI/AppLink/AppLink'
import {ThemeSwitcher} from 'widget'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

const Navbar = ({className}: NavbarProps) => {

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={classNames(cls.links)}>
				<AppLink
					to={'/'}
					theme={AppLinkTheme.SECONDARY}
					className={classNames(cls.mainLink)}
				>
					Главная
				</AppLink>
				<AppLink
					to={'/about'}
					theme={AppLinkTheme.SECONDARY}
				>
					О сайте
				</AppLink>
			</div>
		</div>
	)
}

export default Navbar
