var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: "common",
    filename: "common.bundle.js",
});


module.exports = {
    entry: './src/main/frontend/containers/ContactInfoContainer.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets:['react']
                }
            }
        ],
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '']
    },
};