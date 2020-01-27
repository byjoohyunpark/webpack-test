const path = require('path');
var merge = require('webpack-merge');
const common = require('./webpack.common.config')


module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    // devServer: { 
    //     contentBase: './dist',
    // }
});

