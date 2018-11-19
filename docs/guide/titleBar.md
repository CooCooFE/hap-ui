# hap-titleBar

> hap 标题栏组件


## 安装

```js{4}
$ npm install hap-ui -D
```

## 引入
```js{4}
<import name='hap-titleBar' src='@hap-ui/hap-titleBar'></import>
```

## Demo

gif图展示

#### 使用方法

```js{4}
<hap-titleBar title="titleBar1"
              onleft-button-clicked="onLeftButtonClicked"
              onright-button-clicked="onRightButtonClicked"
              right-button="./images/share-1.png" ></hap-titleBar>
```

#### 绑定 click 事件

```js{4}
<hap-titleBar
  onleft-button-clicked="onLeftButtonClicked"
  onright-button-clicked="onRightButtonClicked"></hap-titleBar>
```

更详细代码可以参考 [hap-titleBar demo](https://github.com/CooCooFE/hap-ui/src/ux-titleBar/index.ux)

## 可配置参数

| Prop        | Type        | Default | Description |
|-------------|------------|:--------:|:-----------:|
| title       | `String`   |    title |titleBar的文字|
| text-color  | `String`   | #FFFFFF | 文字颜色|
| text-align  | `String`   | center| 文本对齐方式|
| font-size   | `String`   | 35px | 字体尺寸|
| background-color | `String` | #0faeff | 背景颜色 |
| right-button | `String` |  | 右侧按钮文本描述 |
| left-button  | `String` |  | 左侧按钮文本描述 |

## 更新日志

#### v1.0.0（2018-11-16）
* 初始版本

