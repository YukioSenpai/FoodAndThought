import React from 'react'
import { classes } from 'typestyle'

import { css } from './title.styles'

export const Title: React.FC<{ centered?: boolean }> = ({ children, centered }) => {
  const titleClasses = classes(css.title, centered ? css.centered : '')
  return <div className={titleClasses}>{children}</div>
}
