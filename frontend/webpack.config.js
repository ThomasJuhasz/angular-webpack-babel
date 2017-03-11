var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/pages/product-list/product-list.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: 'src/index.html'
        })
    ]
};