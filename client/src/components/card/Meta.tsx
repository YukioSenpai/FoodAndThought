import React from 'react'
import { Card } from 'antd'
import { CardMetaProps } from 'antd/lib/card'
import { css } from './meta.styles'
import { classes } from 'typestyle'

type Props = CardMetaProps

export const Meta: React.FC<Props> = ({ className, ...props }) => (
  <Card.Meta className={classes(css.container, className || '')} {...props} />
)
