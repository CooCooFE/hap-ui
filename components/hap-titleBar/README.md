# titleBar

> 按钮组件，提供了通栏和非通栏两种大小，可自定义样式


## 安装

```js{4}
$ npm install hap-ui -D
```

## 引入
```js{4}
<import name='hap-titleBar' src='@hap-ui/hap-titleBar'></import>
```

## 例子

#### 不同颜色

```js{4}
<hap-titleBar></hap-titleBar>
```

#### 绑定 click 事件

```js{4}
<hap-titleBar
  onleft-button-clicked="onLeftButtonClicked"
  onright-button-clicked="onRightButtonClicked"></hap-titleBar>
```

#### 自定义样式按钮

```js{4}
<hap-titleBar title="tileBar"
              background-color="#f2f3f4"
              text-color="#333333"
              text-align="left"
              left-button="./icon.png"></hap-titleBar>
```

更详细代码可以参考 [hap-titleBar demo](https://github.com/CooCooFE/hap-ui/src/ux-titleBar/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| title | titleBar的文字 | `String` |  title |
| text-color | 文字颜色 | `String` | #d9d9d9 |
| text-align | 文本对齐方式 | `Number` | 6 |
| font-size | 字体尺寸 | `String` | #ffffff |
| background-color | 背景颜色 | `Number` | 200 |
| right-button | 按钮的高度 | `Number` | 80 |
| left-button | 按钮文字的大小 | `Number ` | 32 |


## 更新日志

#### v1.0.0（2018-11-16）
* 初始版本

