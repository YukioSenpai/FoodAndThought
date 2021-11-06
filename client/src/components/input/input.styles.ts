import { color, important } from 'csx'
import { palette } from 'styles/palette'
import { stylesheet } from 'typestyle'

export const css = stylesheet({
  input: {
    display: 'flex',
    alignItems: 'center',
    top: important(0),
    $nest: {
      '&.ant-input-search.ant-input-search-enter-button': {
        display: 'flex',
      },
      '&.ant-input-search .ant-input-group-addon': {
        backgroundColor: color(palette.thinGray).lighten(0.05).toString(),
        color: palette.gray,
      },
    },
  },
  inputForm: {
    display: 'flex',
    alignItems: 'center',
    top: important(0),
    outline: 0,
    borderWidth: '0 0 1px',
    borderColor: palette.secondary,
    backgroundColor: '#F5F7F9',
    $nest: {
      '&:focus': {
        borderColor: important(palette.secondary),
        borderRightWidth: important('0px'),
        boxShadow: important('none'),
      },
      '&:hover': {
        borderRightWidth: important('0px'),
      },
    },
  },
})
