import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode, // development production
    entry: paths.entry, // Путь для стартовой точки в приложении
    output: { // Куда и как будем делать сборку приложения
      /* как файл будет называться
			* [name] - динамическое название файла
			* [contenthash] - генерация уникального ключа
			* */
      filename: '[name].[contenthash].js',
      path: paths.build, // путь до папки
      clean: true, // true - очищает build при каждой сборки
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    // Позволяет видеть исходный код в DevTools. В prod отключаем
    devtool: isDev ? 'inline-source-map' : false,
    // При prod-сборки не будут создаваться source-map
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
