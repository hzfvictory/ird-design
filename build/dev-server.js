const path = require("path");
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const open = require("open");
const common = require("./webpack.common.js");

let configuration = merge(common, {
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
const compiler = webpack(configuration);

const derServerOpt = {
  historyApiFallback: true, // 重定向
  host: "localhost",
  port: 9000,
  hot: true,
  open: false,
  noInfo: true,
  proxy: {},
};
const server = new WebpackDevServer(compiler, derServerOpt);

// function middleware(req, res, next) {
//   console.log(req);
//   next();
// }
// server.use(middleware);

server.listen(derServerOpt.port, "localhost", function() {
  let uri = `http://localhost:${derServerOpt.port}`;
  console.log(`> Listening at \x1B[36m${uri}\x1B[0m`);

  // open(uri);
});


