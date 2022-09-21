import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, {DefinePlugin} from 'webpack'
import {BuildOptions} from './types/config'

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] { // WebpackPluginInstance - тип для плагинов webpack
	return [
		new HTMLWebpackPlugin({  // Минимизирует html-файл
			template: paths.html // Файл index.html будет использоваться как шаблон
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new DefinePlugin({  // С помощью DefinePlugin можно прокидывать в приложение глобальные переменные
			__IS_DEV__: JSON.stringify(isDev)
		})
	]
}
