"use strict";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var IS_PROD = process.argv.indexOf('-p') > -1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    devtool: IS_PROD ? 'source-map' : 'eval',
    entry: path.join(__dirname, 'demo', 'entry.ts'),
    output: {
        filename: IS_PROD ? '[name]-[chunkhash].js' : '[name].js'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'tslint-loader?emitErrors=false&failOnHint=false',
                exclude: /node_modules/,
                enforce: 'pre'
            }, {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        port: 8000,
        inline: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: (IS_PROD ? [] : [new webpack.HotModuleReplacementPlugin()]).concat([
        new webpack.DefinePlugin({
            ENV: JSON.stringify(IS_PROD ? 'production' : 'development')
        }),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.join(__dirname, 'src')),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'demo', 'index.ejs')
        })
    ])
};
