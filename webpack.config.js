const path = require('path')
const validate = require('webpack-validator')

module.exports = validate({
  context: path.resolve(__dirname, './src'),
  entry: {
    filename: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
})
