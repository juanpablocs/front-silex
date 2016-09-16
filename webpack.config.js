/**
 * @author Juan Pablo <juanpablocs21@gmail.com
 * @date 16/09/16.
 */
 
var webpack = require('webpack');

module.exports = {
    context : __dirname + '/frontend/es6',
    entry   : {
        app     : __dirname + '/frontend/es6/main.js',
        vendor : ['underscore']
    },
    output  : {
        path      : __dirname + '/web/assets/',
        publicPath: '/assets/',
        filename  : '[name].min.js',
        chunkFilename: '[id].[name].min.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', '[name].min.js')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query:{presets:['es2015']},
                exclude:/node_modules/
            }
        ]
    }
};