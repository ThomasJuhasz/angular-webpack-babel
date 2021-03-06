var fs = require('fs');
var path = require('path');
var process = require('process');

var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin({
    filename: "style-[contenthash].bundle.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    context: __dirname + '/src',
    entry: getEntries(),
    output: {
        path: __dirname + '/dist',
        filename: "[name]-[chunkhash].bundle.js"
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
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new HtmlwebpackPlugin({
            template: 'index.html',
            favicon: 'images/favicon.ico'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor-[chunkhash].bundle.js"
        }),
        extractLess
    ]
};


function getEntries() {
    var entries = getPages();

    entries.vendor = ['angular', 'angular-ui-router']

    return entries;
}
function getPages() {
    var pages = {};

    var folders = fs.readdirSync('./src/app/pages/');

    folders.forEach(function (folder, index) {
        pages[folder] = './app/pages/' + folder + "/" + folder + ".js";
    });

    return pages;
}