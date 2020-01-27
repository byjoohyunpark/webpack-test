const path = require('path');
var merge = require('webpack-merge');
const common = require('./webpack.common.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.[contentHash].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});

