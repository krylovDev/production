import {buildLoaders} from './buildLoaders'
import {buildPlugins} from './buildPlugins'
import {buildResolvers} from './buildResolvers'
import {BuildOptions} from './types/config'
import path from 'path'
import webpack from 'webpack'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

	const {mode,paths} = options

	return {
		mode, // development production
		entry: paths.entry, // Путь для стартовой точки в приложении
		output: { // Куда и как будем делать сборку приложения
			/* как файл будет называться
			* [name] - динамическое название файла
			* [contenthash] - генерация уникального ключа
			* */
			filename: "[name].[contenthash].js",
			path: paths.build, // путь до папки
			clean: true // true - очищает build при каждой сборки
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	}

}
