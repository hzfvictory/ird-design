const path = require("path");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  entry: { app: ["./src/utils/index.js"] },
  output: {
    path: path.resolve(__dirname, "../utils"),
    publicPath: "/",
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
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
});
