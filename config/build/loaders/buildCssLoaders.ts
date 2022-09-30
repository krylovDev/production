import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoaders(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev
        ? 'style-loader'
        : MiniCssExtractPlugin.loader, // в dev-режиме не минифицируем css, только в prod-режиме
      {
        loader: 'css-loader',
        options: {
          modules: { // Для работы css-modules
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader', // Compiles Sass to CSS
    ],
  };
}
