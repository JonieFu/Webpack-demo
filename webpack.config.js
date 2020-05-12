const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base.js");
const path = require("path");
module.exports = {
  mode: "development",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name]..[contenthash].css",
      chunkFilename: "[id]..[contenthash].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
