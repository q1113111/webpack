const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
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
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: "defaults",
                "corejs": "3",
                "useBuiltIns": "entry",
              }]
            ]
          }
        }
      }
    ]
  }
};
