const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const portfinder = require("portfinder"); // 端口号被占取下个端口

module.exports = merge(common, {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "../examples/main.js"),
  },
  output: {
    filename: "static/js/[name].[hash].js",
    chunkFilename: "static/js/[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devtool: "inline-source-map", // 输出报错
  // 热更新
  devServer: {
    port: new Promise((resolve, reject) => {
      portfinder.getPort({ port: 9000, stopPort: 9999 }, (err, port) => {
        if (port) {
          console.log("项目运行端口：" + port);
          resolve(port);
        } else {
          reject(9000);
        }
      });
    }),
    historyApiFallback: true, // 重定向
    host: "localhost",
    hot: true,
    open: false,
    noInfo: true,
    proxy: {
      "/msg": {
        target: "https://www.iowen.cn/jitang/api/",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/msg": "",
        },
      },
    },
  },
  plugins: [
    //浏览器预览页面
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../examples/index.html"),
      favicon: path.resolve(__dirname, "../examples/favicon.svg"),
      title: "ird-design",
      filename: "index.html",
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
