'use strict';
let path = require('path');
let webpack = require('webpack');
module.exports = {
    entry: './src/main/frontend/containers/AppContainer.js',
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:['es2015', 'react', 'stage-2' ]
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
