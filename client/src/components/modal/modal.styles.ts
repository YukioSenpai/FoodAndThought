import { stylesheet } from 'typestyle'

export const css = stylesheet({
  container: {
    overflow: 'hidden',
    $nest: {
      '& > .ant-modal-content': {
        overflow: 'hidden',
      },
    },
  },
})
