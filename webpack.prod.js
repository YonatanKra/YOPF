const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new CleanWebpackPlugin(['dist'])
    ]
});