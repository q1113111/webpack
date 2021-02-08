const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject:'body',
    }),
    new CopyPlugin({
      patterns: [
        { from: "static", to: "static" },
      ],
    }),
  ]
};
