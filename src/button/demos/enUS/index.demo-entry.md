# Button

Button is used to trigger some actions.

## Demos

```demo
basic
dashed
size
text
tag
disabled
icon
events
shape
ghost
loading
color
group
icon-button
```

## Props

### Button Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| attr-type | `'button' \| 'submit' \| 'reset'` | `'button'` | The `type` attribute of the button's DOM. |
| block | `boolean` | `false` | Whether the button is displayed as block. |
| bordered | `boolean` | `true` | Whether the button shows the border. |
| circle | `boolean` | `false` | Whether the button is round. |
| color | `string` | `undefined` | Button color(support `#FFF`, `#FFFFFF`, `yellow`,`rgb(0, 0, 0)` formatted colors). |
| dashed | `boolean` | `false` | Whether the button's border is a dashed line. |
| disabled | `boolean` | `false` | Whether the button is disabled. |
| ghost | `boolean` | `false` | Whether the button is ghost. |
| icon-placement | `'left' \| 'right'` | `'left'` | The position of the icon in the button. |
| keyboard | `boolean` | `true` | Whether is supports keyboard operation. |
| loading | `boolean` | `false` | Whether the button shows the loading status. |
| round | `boolean` | `false` | Whether the button shows rounded corners. |
| size | `'tiny' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Button size. |
| text | `boolean` | `false` | Whether to display as a text button. |
| type | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'error'` | `'default'` | Button type. |
| tag | `string` | `'button'` | What tag need the button be rendered as. |

### Button Group Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | `'tiny' \| 'small' \| 'medium' \| 'large'` | `undefined` | The buttons' size in button group. If set, the button's size prop inner group won't work. |
| vertical | `boolean` | `false` | Directions of buttons in the group. |

## Slots

### Button Slots

| Name    | Parameters | Description                        |
| ------- | ---------- | ---------------------------------- |
| default | `()`       | The default content of the button. |
| icon    | `()`       | The icon of the button.    |

### Button Group Slots

| Name    | Parameters | Description                            |
| ------- | ---------- | -------------------------------------- |
| default | `()`       | The button group is filled by default. |
