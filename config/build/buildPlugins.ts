import {BuildOptions} from 'config/build/types/config'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] { // WebpackPluginInstance - тип для плагинов webpack
	return [
		new HTMLWebpackPlugin({  // Минимизирует html-файл
			template: paths.html // Файл index.html будет использоваться как шаблон
		}),
		new webpack.ProgressPlugin(),
	]
}
