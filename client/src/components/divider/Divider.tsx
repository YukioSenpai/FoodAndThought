import { Divider as AntDivider, DividerProps } from 'antd'
import React from 'react'
import { classes } from 'typestyle'
import { css } from './divider.styles'

interface OwnProps {
  margin: boolean
}

type Props = DividerProps & OwnProps

export const Divider: React.FC<Props> = ({ className, margin, ...props }) => (
  <div className={margin ? css.wrapper : ''}>
    <AntDivider {...props} className={classes(css.divider, className || '')} />
  </div>
)
