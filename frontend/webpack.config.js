var fs = require('fs');
var path = require('path');
var process = require('process');

var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: function () {
        var entries = getPages();
        entries.vendor = ['angular', 'angular-ui-router']
        return entries;
    }(),
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

function getPages() {
    //productList: './app/pages/product-list/product-list.js',
    var pages = {};
    // Loop through all the files in the temp directory
    var folders = fs.readdirSync('./src/app/pages/');

    folders.forEach(function (folder, index) {
        pages[folder] = './app/pages/' + folder + "/" + folder + ".js";
    });

    console.error(pages);
    return pages;
}