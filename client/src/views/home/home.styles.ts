import { stylesheet } from 'typestyle'

export const css = stylesheet({
  container: {
    maxWidth: '900px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '5rem',
    paddingTop: '15rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  button: {
    width: '100%',
    color: '#000',
    border: '1px solid #fff',
    borderRadius: '4px',
    cursor: 'pointer',
    $nest: {
      '&:hover': {
        backgroundColor: '#000',
        color: '#fff',
      },
    },
  },
})
