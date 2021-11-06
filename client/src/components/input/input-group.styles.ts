import { important } from 'csx'
import { stylesheet } from 'typestyle'

export const css = stylesheet({
  container: {
    display: important('flex'),
    width: 'auto',
  },
})
