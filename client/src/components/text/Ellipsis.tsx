import React from 'react'
import { inlineBlock, overflowStyleSheet } from 'styles/overflow'
import { classes } from 'typestyle'
import { isString } from 'fp-ts/string'

export const Ellipsis: React.FC<{ width: string }> = ({ width, children }) => {
  return (
    <span
      style={{ width }}
      title={isString(children) ? children : undefined}
      className={classes(overflowStyleSheet.inlineBlock, overflowStyleSheet.textEllipsis)}
    >
      {children}
    </span>
  )
}
