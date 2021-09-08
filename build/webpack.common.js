const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Webpackbar = require("webpackbar");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const isProd = process.env.NODE_ENV !== "development";

const config = {
  resolve: {
    extensions: [".js", ".jsx", ".vue", ".css", ".scss", ".json", ".md"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "packages": path.resolve(__dirname, "../packages"),
      "doc": path.resolve(__dirname, "../examples"),
      "ird": path.resolve(__dirname, "../"),
      "vue$": "vue/dist/vue.esm.js",
    },
  },
  // 规则配置
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          "cache-loader",
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false,  // 阻止元素间生成空白内容
              },
            },
          },
        ],
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        use: [
          "thread-loader",
          "cache-loader",
          "babel-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 1024 * 10,// 表示小于50kb的图片转为base64,大于50kb的是路径
              name: path.posix.join("static", "images/[name].[hash:7].[ext]"),
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 1024 * 10,
              name: path.posix.join("static", "fonts/[name].[hash:7].[ext]"),
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader", // 新版本不支持在此配置，转postcss.config.js
        ],
      },
      {
        test: /\.md$/,
        use: [
          "thread-loader",
          "cache-loader",
          "vue-loader",
          {
            loader: path.resolve(__dirname, "./markdown-loader"),
          },
        ],
      },
    ],
  },
  // 引入插件
  plugins: [
    new Webpackbar({
      name: "ird-design",
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.FAAS_ENV": JSON.stringify(process.env.FAAS_ENV),
    }),
    new VueLoaderPlugin(),
  ],
};

// module.exports = smp.wrap(config);
module.exports = config;
