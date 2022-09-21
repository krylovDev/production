import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/ib/classNames/classNames'
import Button, {ThemeButton} from 'shared/UI/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
	className?: string
}

const LangSwitcher = ({className}: LangSwitcherProps) => {

	const {t, i18n} = useTranslation()

	const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}
		>
			{t('Язык')}
		</Button>
	)
}

export default LangSwitcher
