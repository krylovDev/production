import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, // Автоматически открывает страницу в браузере с приложением
    historyApiFallback: true,
    hot: true, // Позволяет видеть изменения на странице, не перезагружая страницу
  };
}
