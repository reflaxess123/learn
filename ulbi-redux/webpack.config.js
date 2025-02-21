const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production', // Режим сборки "production"
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // Использование contenthash для корректного кэширования браузером
        filename: '[name].[contenthash].js',
        publicPath: './', // Указываем publicPath, если собираете SPA
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader', // Транспилируем JS/JSX через Babel
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Извлечение CSS в отдельные файлы
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource', // Обработка изображений
                generator: {
                    filename: 'images/[name].[hash][ext]', // Выходная структура для изображений
                },
            },
            // Если потребуется, можно добавить правила для обработки шрифтов или других файлов
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(), // Очистка папки dist перед каждой сборкой
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // Минификация итогового HTML
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
                minifyJS: true,
                minifyCSS: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all', // Разделение кода на чанки
        },
        runtimeChunk: 'single', // Выделение runtime-кода
    },
};
