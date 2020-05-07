var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: '/\.css$/',
                use: ['style-laoder', 'css-loader']
            },
        ]
    },
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        })    
    ]
}