export type Modes = Record<string, boolean | string | undefined>

export function classNames(
  cls: string,
  modes: Modes = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean), // т.к. в additional могут прилетать undefined
    ...Object.entries(modes)
      .filter(([_, value]) => Boolean(value)) // Итерируемся по modes и оставляем только 'true'
      .map(([className]) => className), // Забираем ключи
  ]
    .join(' ');
}
