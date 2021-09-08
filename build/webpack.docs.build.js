const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {version} = require("../package.json");

module.exports = merge(common, {
  mode: 'production', // 压缩输出
  devtool: 'source-map', // 生产环境的报错信息
  entry: {
    main: path.resolve(__dirname, '../examples/main.js') // 入口文件
  },
  // bundle输出，这里也可以分开写在开发环境和生产环境中
  output: {
    filename: 'static/js/[name].[chunkhash].js', // chunkhash不可与热更新一起使用，开发环境使用了热更新，所以需要区分开发和生产环境
    chunkFilename: 'static/js/[name].bundle.js', // 决定非入口 chunk 的名称
    // path: path.resolve(__dirname, `../dist/${version}`),
    // publicPath: `/${version}/`  // 解决css 分离后图片引入路径不正确问题

    // dev用
    path: path.resolve(__dirname, `../dist`),
    publicPath: `/`
  },
  optimization: {
    // 压缩js
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../examples/index.html'),
      favicon: path.resolve(__dirname, '../examples/favicon.svg'),
      title: '掌阅ird-design',
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true, // 压缩内联css
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'static/style/[name].[hash:7].css'
    })
  ]
});
