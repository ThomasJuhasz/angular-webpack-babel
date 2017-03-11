var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: {
        vendor: ['angular', 'angular-ui-router'],
        productList: './app/pages/product-list/product-list.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }],
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new HtmlwebpackPlugin({
            template: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js"
        })
    ]
};

/*
        new webpackUglifyJsPlugin({
            cacheFolder: __dirname + 'public/cached_uglify/',
            debug: true,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        })
*/