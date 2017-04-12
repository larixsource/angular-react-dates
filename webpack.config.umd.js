"use strict";
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var angularExternals = require('webpack-angular-externals');
var rxjsExternals = require('webpack-rxjs-externals');
var pkg = JSON.parse(fs.readFileSync('./package.json').toString());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    entry: {
        'angular-react-dates.umd': path.join(__dirname, 'src', 'index.ts'),
        'angular-react-dates.umd.min': path.join(__dirname, 'src', 'index.ts'),
    },
    output: {
        path: path.join(__dirname, 'dist', 'bundles'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'angularReactDates'
    },
    externals: [
        angularExternals(),
        rxjsExternals()
    ],
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'tslint-loader?emitErrors=true&failOnHint=true',
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
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true
        }),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, path.join(__dirname, 'src')),
        new webpack.BannerPlugin({
            banner: ("\n/**\n * " + pkg.name + " - " + pkg.description + "\n * @version v" + pkg.version + "\n * @author " + pkg.author + "\n * @link " + pkg.homepage + "\n * @license " + pkg.license + "\n */\n      ").trim(),
            raw: true,
            entryOnly: true
        })
    ]
};
