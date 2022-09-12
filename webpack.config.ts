import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
	mode: "development", // development production
	entry: path.resolve(__dirname, 'src','index.ts'), // Путь для стартовой точки в приложении
	output: { // Куда и как будем делать сборку приложения
		/* как файл будет называться
		* [name] - динамическое название файла
		* [contenthash] - генерация уникального ключа
		* */
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname,'build'), // путь до папки
		clean: true // true - очищает build при каждой сборки
	},
	plugins: [
		new HTMLWebpackPlugin({  // Минимизирует html-файл
			template: path.resolve(__dirname,'public','index.html') // Файл index.html будет использоваться как шаблон
		}),
		new webpack.ProgressPlugin(),
	],
	module: {
		rules: [ // Конфигурация лоадеров, для обработки файлов
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'], // Расширения тех файлов при импорте, которых, мы не будем указывать расширение @example import Component from './component'
	},
}

export default config
