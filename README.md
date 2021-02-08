# Webpack

###### tags: `vscode`

---

## 安裝流程

```javascript=
//server 是存檔可以執行 npx webpack命令
npm install webpack webpack-cli webpack-dev-server --save-dev
npm i html-webpack-plugin -D
//完整複製過去
npm install copy-webpack-plugin --save-dev
//清除舊資料 只呈現最新資料
npm install --save-dev clean-webpack-plugin
//合併wepback.config檔
npm i webpack-merge -D
//babel
npm install -D babel-loader @babel/core @babel/preset-env
npm install core-js@3 --save
```

## 五種模式

1. 入口 (entry)
2. 出口 (output)
3. loader
4. 插件 (plugin)
5. 模式 (mode)
   - development 開發模式
   - production 輸出產品
   - none

---

## build

在 buid 資料夾下建立四種 webpack.config

1. webpack.base.config.js

```javascript=
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

```

2. webpack.dev.config.js

```javascript=
module.exports={
    devtool: 'eval-cheap-module-source-map'
}
```

3. webpack.pro.config.js

```javascript=
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports ={
    plugins: [
        new CleanWebpackPlugin(),
    ],
}
```

4. webpack.config.js

```javascript=
const { merge } = require('webpack-merge')
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");


module.exports = (env, argv) => {
  const config = argv.mode === "development" ? devConfig : proConfig;
  return merge(baseConfig, config);
};

```
