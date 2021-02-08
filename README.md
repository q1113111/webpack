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

```javascript=

```

4. 插件 (plugin)

```javascript

```

5. 模式 (mode)
   - development 開發模式
   - production 輸出產品
   - none
