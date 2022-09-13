import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import {BuildOptions} from './types/config'

// Конфигурация лоадеров, для обработки файлов
export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
		  	isDev
			    ? "style-loader"
			    : MiniCssExtractPlugin.loader, // в dev-режиме не минифицируем css, только в prod-режиме
			{
				loader: 'css-loader',
				options: {
					modules: { // Для работы css-modules
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]'
					},
				}
			},
			"sass-loader", // Compiles Sass to CSS
		],
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		typescriptLoader,
		cssLoader,
	]
}
