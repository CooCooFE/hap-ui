# ux-checkboxList

> quickApp checkboxList 组件


### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| list | `Array` |`Y`| `[]` | config list(*1) |
| checked-icon-src | `String` |`N`| `-` | checkbox选中时icon |
| unchecked-icon-src | `String` |`N`| `-` | checkbox未选中时icon |

- 注1: `list`
```
const list=[
        { title: '选项1', checked: true },
        { title: '选项2', checked: false },
        { title: '选项3', checked: false },
        { title: '选项4', checked: true }
      ];
```

### 事件回调

| event | params | Description |
|-------------|------------|--------|
| change | 'e.detail.params' | checkboxList选中的索引（数组） |