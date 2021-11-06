import { stylesheet } from 'typestyle'
import { textInput } from 'styles/input'

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
