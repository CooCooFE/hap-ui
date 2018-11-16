# ux-searchbar 

> quickApp 搜索栏组件

### 规则
- 一般可位于 NavBar 下方
- 允许设置点击跳转

### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| placeholder | `String` |`N`| `搜索` | input placeholder|
| type | `String` |`N`| `text` | `text，password，email，number`|
| enterkeytype  | `String` |`N`| `default` |键盘返回键的类型 `default/send/search/send/next/go/done`|
| cancellabel | `String` |`N`| `取消 ` |右侧按钮文案|
| autofocus | `Boolean` |`N`| `false` | 是否在页面加载时控件自动获得输入焦点 |
| value | `String` |`N`| `-` | 默认值 |
| disabled | `Boolean` |`N`| `false` | 是否禁用 |
| showsearchicon | `Boolean` |`N`| `true` | 是否显示搜索 |
| showcancel | `Boolean` |`N`| `true` | 是否显示取消按钮 |
| theme | `String` |`N`| `gray` |  输入框的色值主题 `gray`/`yellow` |

### 事件回调

```
// 具体使用可以参考上述demo，不需要可以不使用
```