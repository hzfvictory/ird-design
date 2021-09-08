const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../examples/main.js'),
  },
  output: {
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map', // 输出报错
  // 热更新
  devServer: {
    historyApiFallback: true, // 重定向
    host: 'localhost',
    port: 9000,
    hot: true,
    open: false,
    noInfo: true,
    proxy: {},
  },
  plugins: [
    //浏览器预览页面
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../examples/index.html'),
      favicon: path.resolve(__dirname, '../examples/favicon.svg'),
      title: 'ird-design',
      filename: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
})
