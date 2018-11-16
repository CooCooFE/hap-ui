# ux-lightbox

> quickApp 图片预览组件

### 规则
- 在图片列表中使用

### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| list | `Array` |`Y`| `[]` | 图片信息列表 格式：`[{src: path}]` |
| index | `Number` |`N`| `0` | 组件将显示第`index`张图片 |
| indicator-color | `String` |`N`| `#33b4ff` | 轮播指示器背景颜色 |
| indicator-selected-color | `String` |`N`| `#ffc324` | 被选中的轮播指示器背景颜色 |
| indicator-size | `String` |`N`| `20px` | 轮播指示器大小 |
| show-lightbox  | `Boolean` |`N`| `true` | 是否展示组件 |
| show-indicator | `Boolean` |`N`| `true ` |是否显示轮播指示器|

### 事件回调

| event | params | Description |
|-------------|------------|--------|
| change | `e.detail.params` | 返回lightbox插件当前图片的索引 |