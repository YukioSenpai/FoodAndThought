import { textInput } from 'styles/input'
import { stylesheet } from 'typestyle'

export const css = stylesheet({
  editableText: {
    cursor: 'text',
    $nest: {
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  input: {
    ...textInput,
    maxWidth: '10rem',
  },
})
