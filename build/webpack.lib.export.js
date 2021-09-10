const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const utils = require("./utils.js");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: "production",
  entry: { app: ["./src/index.js"] },
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/",
    filename: "ird-design.common.js",
    chunkFilename: "[id].js",
    libraryExport: "default",
    library: "IREAD",
    libraryTarget: "commonjs2",
  },
  externals: utils.externals,
  optimization: {
    // 压缩js
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: 4, // 4进程
        terserOptions: {
          compress: {
            drop_console: true,//移除所有console相关代码；
            drop_debugger: true,//移除自动断点功能；
            pure_funcs: ["console.log", "console.error"],//配置移除指定的指令，如console.log,alert等
          },
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'styles/ird-design.common.css'
    // })
  ],
});
