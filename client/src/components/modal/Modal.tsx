import { Modal as AntModal } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import React from 'react'
import { classes } from 'typestyle'
import { css } from './modal.styles'

export const Modal: React.FC<ModalProps> = ({ children, className, ...props }) => (
  <AntModal {...props} className={classes(css.container, className || '')}>
    {children}
  </AntModal>
)
