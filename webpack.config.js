const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин для генерации HTML-файлов и автоматической вставки в них <script> и <link>.
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // плагин для извлечения CSS в отдельные файлы (а не встраивания в JS).
const CopyWebpackPlugin = require('copy-webpack-plugin'); // плагин для копирования файлов и папок в директорию сборки.
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); // плагин для сжатия изображений при сборке.
// const isProd = process.env.NODE_ENV === 'production' || process.argv.includes('--mode=production');
const isProd = process.env.NODE_ENV === 'production'; // process.env.NODE_ENV — это переменная окружения, в которую Webpack подставляет режим сборки ('development' или 'production').

module.exports = {
  entry: './src/scripts/main.js', // входная точка (главный JS-файл приложения).
  output: { // настройки выхода (куда собирать результат).
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: isProd ? '/coffee-house/' : '/', // базовый адрес для всех файлов в сборке, нужен чтобы ресурсы находились на GitHub Pages через '/coffee-house/', либо на dev-сервере через '/'.
  },

  // Настройки обработки модулей
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false, // отключает обработку url(...) в CSS
            },
          },
          'sass-loader'
        ],
      },
    ],
  },

  // Подключение плагинов
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/menu.html',
      filename: 'menu.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'assets', // копируем всё содержимое assets
          to: 'assets', // в dist/assets
          globOptions: {
            ignore: ['**/products.json'], // кроме products.json
          },
        },
      ],
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['mozjpeg', { quality: 75 }], // % качества jpeg (0–100) p.s. чем выше, тем меньше сжатие.
            ['optipng', { optimizationLevel: 3 }], // уровень сжатия png без потери качества (0-7) p.s. увеличивает время сборки.
            ['pngquant', { quality: [0.7, 0.9] }], // диапазон качеста png [min, max] (0-1).
          ],
        },
      },
    }),
  ],
  devServer: {
    static: false, // не ищет файлы на диске, использует только in-memory сборку
    open: true,
    hot: true,
  },
  mode: 'development',
};