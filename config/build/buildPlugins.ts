import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

// WebpackPluginInstance - тип для плагинов webpack
export function buildPlugins(
  {
    paths,
    isDev,
  }: BuildOptions,
): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({ // Минимизирует html-файл
      template: paths.html, // Файл index.html будет использоваться как шаблон
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // С помощью DefinePlugin можно прокидывать в приложение глобальные переменные
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];

  /* plugins.push(
    // Не баг, а фича. ErrorBoundary неправильно отрабатывает при new ReactRefreshWebpackPlugin() в dev-сборке
    // new ReactRefreshWebpackPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ); */

  // Ниже плагины нужны только в dev-сборке
  if (isDev) {
    plugins.push(
    // Не баг, а фича. ErrorBoundary неправильно отрабатывает при new ReactRefreshWebpackPlugin() в dev-сборке
    //   new ReactRefreshWebpackPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
}
