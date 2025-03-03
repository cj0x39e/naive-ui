# 提及 Mention

一年多之前产品经理问我能不能搞这个东西，当时我让他们用多选凑活一下。

## 演示

```demo
basic
textarea
async
autosize
form
render-label
custom-prefix
```

## Props

Mention 在 `v2.2.0` 及以后可用。

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| autosize | `boolean \| { maxRows?: number, minRows?: number }` | `false` | 自动换行 |
| options | `MentionOption[]` | `[]` | 选项列表 |
| type | `'input' \| 'textarea'` | `'input'` | 输入框类型 |
| separator | `string` | `' '` | 切分提及使用的字符，长度必须为 1 |
| bordered | `boolean` | `true` | 是否显示输入框边框 |
| disabled | `boolean` | `false` | 是否设置输入框为禁用状态 |
| value | `string \| null` | `undefined` | 输入框的值 |
| default-value | `string` | `''` | 输入框的默认值 |
| loading | `boolean` | `false` | 选择面板是否显示加载状态 |
| prefix | `string \| string[]` | `'@'` | 触发提及的前缀，长度必须为 1 |
| placeholder | `string` | `''` | 输入框的占位符 |
| render-label | `undefined \| (option: MentionOption) => VNodeChild` | `undefined` | 选项标签渲染函数 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 输入框的大小 |
| on-update:value | `(value: string) => void` | `undefined` | 输入框值发生更新时触发 |
| on-select | `(option: MentionOption, prefix: string) => void` | `undefined` | 输入框的选中时触发 |
| on-focus | `(e: FocusEvent) => void` | `undefined` | 输入框获得焦点时触发 |
| on-search | `(pattern: string, prefix: string) => void` | `undefined` | 输入框搜索时触发 |
| on-blur | `(e: FocusEvent) => void` | `undefined` | 输入框失去焦点时触发 |

### MentionOption Properties

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| class | `string` | 选项的自定义类名 |
| disabled | `boolean` | 选项是否禁用 |
| label | `string \| (option: MentionOption) => VNodeChild` | 选项的标签 |
| render | `(option: MentionOption) => VNodeChild` | 支持通过 `render` 渲染函数自定义选项 |
| style | `string` | 选项的样式 |
| value | `string` | 在选项中应该是唯一的 |

### Mention Slots

| 名称  | 参数 | 说明                |
| ----- | ---- | ------------------- |
| empty | `()` | 菜单无数据时的 slot |
