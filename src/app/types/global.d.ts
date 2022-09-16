declare module '*.scss'{ // Глобальная декларация, для того, чтобы IDE понимала что мы хотим импортировать стили из .module.scss
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}
