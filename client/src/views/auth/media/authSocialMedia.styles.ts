import { stylesheet } from 'typestyle'

export const css = stylesheet({
  button: {
    backgroundColor: '#fff',
    color: '#484848',
    height: '3rem',
    width: '100%',
    borderColor: '#E6E8E8',
    textAlign: 'left',
    $nest: {
      '&:hover': {
        borderColor: '#484848',
        color: '#484848',
        backgroundColor: '#fff',
      },
    },
  },
  logo: {
    fontSize: '1.5rem',
    verticalAlign: 'sub',
  },
  space: {
    width: '300px',
    marginBottom: '2rem',
  },
})
