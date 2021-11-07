import { stylesheet } from 'typestyle'

export const css = stylesheet({
  container: {
    maxWidth: '300px',
    margin: '2rem auto 0 auto',
    textAlign: 'center',
  },
  box: {
    border: '1px solid #E6E8E8',
    padding: '1rem',
  },
  button: {
    width: '100%',
    backgroundColor: '#55CB91',
    color: '#fff',
    border: '1px solid #55CB91',
    borderRadius: '4px',
    height: '2rem',
    cursor: 'pointer',
    $nest: {
      '&:hover': {
        backgroundColor: '#fff',
        color: '#55CB91',
      },
    },
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  divider: {
    color: '#939393',
    textAlign: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  footer: {
    textAlign: 'center',
  },
  link: {
    color: '#55CB91',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
})
