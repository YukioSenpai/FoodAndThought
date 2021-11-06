import { palette } from 'styles/palette'
import { stylesheet } from 'typestyle'

export const css = stylesheet({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    color: palette.secondary,
    $nest: {
      '&.fullScreen': {
        width: '100vw',
        height: '100vh',
        fontSize: '5rem',
      },
    },
  },
  inlineContainer: {
    display: 'inline',
    padding: '0 .5rem',
  },
  icon: {
    $nest: {
      '&:hover': {
        color: palette.secondary,
      },
    },
  },
})
