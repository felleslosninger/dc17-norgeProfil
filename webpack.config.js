'use strict';
let path = require('path');
let webpack = require('webpack');
module.exports = {
    entry: {
        'norgeProfil':'./src/main/frontend/norgeProfil.js',
        'norgePluss':'./src/main/frontend/norgePluss.js'
    },
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: path.resolve(__dirname,'src/main/resources/static/built'),
        filename: '[name].js'
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
