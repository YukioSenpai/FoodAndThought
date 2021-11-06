import { style } from 'typestyle'

export const css = style({
  width: 'auto',
  $nest: {
    '.ant-input-group': {
      width: 'auto',
      height: '28px',
    },
    '.ant-input': {
      width: 0,
      paddingLeft: 0,
      paddingRight: 0,
      borderLeft: 0,
      borderRight: 0,
      boxSizing: 'border-box',
    },
  },
})
