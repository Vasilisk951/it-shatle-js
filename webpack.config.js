const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        'index': './js/index.js',
        'out': './js/out.js',
        'homepage': './js/homepage.js',
        'client': './js/client.js',
        'map': './js/map.js',
        'mapHead': './js/mapHead.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HTMLWebpackPlugin({
            chunks: [
                'index'
            ],
            template: './index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
            }
        }),
        new HTMLWebpackPlugin({
            chunks: [
                'homepage',
                'out'
            ],
            template: './homepage.html',
            filename: 'homepage.html'
        }),
        new HTMLWebpackPlugin({
            chunks: [
                'client',
                'out'
            ],
            template: './client.html',
            filename: 'client.html',
            removeComments: true
        }),
        new HTMLWebpackPlugin({
            chunks: [
                'map',
                'mapHead',
                'out'
            ],
            template: './map.html',
            filename: 'map.html'
        })
    ],
}