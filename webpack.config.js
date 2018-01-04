var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.tsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx', '.json', '.css' ],
    alias: {
      api: path.join(__dirname, 'src/api'),
      components: path.join(__dirname, 'src/components'),
      models: path.join(__dirname, 'src/models')
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      inject: 'body'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
