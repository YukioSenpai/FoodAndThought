import { palette } from 'styles/palette'
import { stylesheet } from 'typestyle'

export const css = stylesheet({
  card: {
    lineHeight: 1.2,
    $nest: {
      '&.disabled': {
        backgroundColor: palette.thinGray,
        cursor: 'not-allowed',
      },
    },
  },
})
