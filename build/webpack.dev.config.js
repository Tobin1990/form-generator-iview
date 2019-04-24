/**
 * 本地开发及预览
 */

const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');


module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        compress: true,
        port: 9000,
        host: '0.0.0.0',
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        writeToDisk: true
    },
    devtool: 'eval-source-map',

    // 入口
    entry: {
        main: path.resolve(__dirname, '../example/main'),
        vendors: ['vue', 'iview']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../example/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../example/dist/index.html'),
            template: path.resolve(__dirname, '../example/index.html')
        })
    ]
});
