const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ['./src/app.js'], // this is our app
    output: {
        chunkFilename: 'scripts/[name].bundle.js',
        filename: 'scripts/[name].bundle.js', // the file name would be my entry's name with a ".bundle.js" suffix
        path: path.resolve(__dirname, 'dist') // put all of the build in a dist folder
    },
    plugins: [
        // This plugin creates our index.html that would load the app for us in the browser
        new HtmlWebpackPlugin({
            title: 'Your Phrase Fireworks!'
        }),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function (module) {
                return module.context &&
                    module.context.includes("node_modules");
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        })
    ],
    module: {
        rules: [
            // use the url loader for font files
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
            // use the html loader
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{loader: 'html-loader'}]
            },
            // use the css loaders (first load the css, then inject the style)
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};