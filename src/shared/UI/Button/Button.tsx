import {ButtonHTMLAttributes, FC} from 'react'
import {classNames} from 'shared/ib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {

	const {
		className,
		children,
		theme,
		...otherProps
	} = props

	return (
		<button
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
