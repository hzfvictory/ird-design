const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const utils = require('./utils.js');

module.exports = merge(common, {
  mode: 'production',
  entry: {app: ['./src/index.js']},
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'ird-design.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'IREAD',
    libraryTarget: 'commonjs2'
  },
  externals: utils.externals,
  optimization: {
    minimize: false
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'styles/ird-design.common.css'
    // })
  ]
});
