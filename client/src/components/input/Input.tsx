import { Input as AntdInput } from 'antd'
import { GroupProps, InputProps } from 'antd/lib/input'
import React from 'react'
import { classes } from 'typestyle'
import { css as inputAddonClassNames } from './input-addon.styles'
import { css as inputGroupClassNames } from './input-group.styles'
import { css } from './input.styles'

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <AntdInput {...props} className={classes(css.input, className !== undefined ? className : '')} />
)

export const InputForm: React.FC<InputProps> = ({ className, ...props }) => (
  <AntdInput
    {...props}
    className={classes(css.inputForm, className !== undefined ? className : '')}
  />
)

export const InputGroup: React.FC<GroupProps> = ({ className, children, ...props }) => (
  <AntdInput.Group {...props} className={classes(inputGroupClassNames.container, className || '')}>
    {children}
  </AntdInput.Group>
)

export const InputAddOn: React.FC<InputProps> = props => (
  <Input {...props} className={inputAddonClassNames} />
)
