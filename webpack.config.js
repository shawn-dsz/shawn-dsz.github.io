// var path = require('path')
// var webpack = require('webpack')
/* global module, __dirname */

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/index.js'
  },
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
}
