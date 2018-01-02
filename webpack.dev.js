const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: './dist'
    }
});