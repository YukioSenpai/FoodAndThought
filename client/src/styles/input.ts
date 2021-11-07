import { stylesheet } from 'typestyle'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { palette } from './palette'
import { textEllipsis } from './overflow'

export const textInput: NestedCSSProperties = {
  maxWidth: '15rem',
  ...textEllipsis,
  backgroundColor: palette.defaultgray,
  fontSize: '1rem',
  border: `1px solid ${palette.lightGray}`,
  $nest: {
    '&:focus': {
      border: `1px solid ${palette.white}`,
    },
  },
}

export const inputCss = stylesheet({
  textInput,
})
