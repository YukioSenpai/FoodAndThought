import { Form, FormItemProps } from 'antd'
import React from 'react'
import { classes } from 'typestyle'
import { css } from './form-item.styles'

export const FormItem = (
  props: FormItemProps & { children: React.ReactNode; fullWidth?: boolean }
) => (
  <Form.Item
    {...props}
    className={
      props.className !== undefined
        ? classes(css.container, props.className || '', 'full-width')
        : classes(css.container, 'full-width')
    }
  >
    {props.children}
  </Form.Item>
)

export type ValidateStatuses = FormItemProps['validateStatus']
