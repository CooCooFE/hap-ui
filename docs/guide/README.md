### 安装  
`$ npm install hap-ui -D` 或 `$ yarn add hap-ui --dev`


### 配置
> 在src同级目录创建config文件夹，在文件中创建webpack.config.js文件
> 在webpack.config.js中加入以下内容
```js{4}
var path = require('path')
module.exports = {
  postHook: function(webpackConf, options){
    webpackConf.resolve.alias = Object.assign(webpackConf.resolve.alias || {}, {
      '@hap-ui': path.join(process.cwd(), 'node_modules/hap-ui/components')
    })
  }
}
```

### 本地体验  
> 此操作适用于在没有项目的基础上进行安装
1. Clone hap-UI 仓库到本地
2. 安装依赖 `$ npm install`
3. 在 hap-ui 根目录下执行 `$ npm run watch`
4. 在 hap-ui 根目录下执行 `$ npm run server`
5. Done~


### 反馈沟通

请扫码进入微信群，此群可快速及时地解答问题。



