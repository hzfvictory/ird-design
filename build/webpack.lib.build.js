const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Components = require('../components.json');
const utils = require('./utils.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },
  externals: utils.externals,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'styles/[name].css'
    // })
  ]
});
