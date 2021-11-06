import { Form as AntForm, FormProps } from 'antd'
import React from 'react'
import { classes, stylesheet } from 'typestyle'

const css = stylesheet({
  container: {
    fontSize: '1.5rem',
  },
})

export const Form: React.FC<FormProps> = ({ children, className, ...props }) => (
  <AntForm className={classes(className || '', css.container)} {...props}>
    {children}
  </AntForm>
)
