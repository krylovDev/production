import webpack from 'webpack'

// Конфигурация лоадеров, для обработки файлов
export function buildLoaders(): webpack.RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		typescriptLoader,
	]
}
