# ux-checkbox

> quickApp checkbox 组件


### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| title | `String` |`N`| `-` | label文本 |
| color | `String` |`N`| `#3D3D3D` | label文本颜色 |
| checked-color | `String` |`N`| `#EE9900` | checkbox选中时label文本颜色 |
| disabled | `Boolean` |`N`| `false` | checkbox是否被禁用 |
| checked | `Boolean` |`N`| `false` | checkbox是否选中 |
| checked-icon-src | `String` |`N`| `-` | checkbox选中时icon |
| unchecked-icon-src | `String` |`N`| `-` | checkbox未选中时icon |

### 事件回调

| event | params | Description |
|-------------|------------|--------|
| change | 'e.detail.params' | checkbox状态变换时的值 |