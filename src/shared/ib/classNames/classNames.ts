type Modes = Record<string, boolean | string>

export function classNames(cls:string, modes: Modes, additional: string[]): string {
	return [
		cls,
		...additional,
		Object.entries(modes)
			.filter(([_,value]) => Boolean(value)) // Итерируемся по modes и оставляем только 'true'
			.map(([className,_]) => className) // Забираем ключи
	]
		.join(' ')
}

