var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Creates `style` nodes from JS strings
                    'css-loader',   // Translates CSS into CommonJS
                    'sass-loader'   // Compiles Sass to CSS
                ],
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns:['dist']
        })
    ]
}