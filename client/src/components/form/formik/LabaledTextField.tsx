import { Input } from 'antd'
import { useField, useFormikContext } from 'formik'
import type { ComponentPropsWithoutRef, PropsWithoutRef } from 'react'
import React, { forwardRef, useEffect } from 'react'
import { ErrorMessages } from './ErrorShared'

type WithoutName<T> = Omit<T, 'name'>

export interface SharedProps {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements['div']>
}
export interface LabeledTextFieldProps
  extends WithoutName<ComponentPropsWithoutRef<typeof Input>>,
    SharedProps {}
export interface LabeledInputPasswordFieldProps
  extends WithoutName<ComponentPropsWithoutRef<typeof Input.Password>>,
    SharedProps {}

export const LabeledTextField = forwardRef<Input, LabeledTextFieldProps>(
  ({ name, label, outerProps, onChange, ...props }, ref) => {
    const [input, _, helper] = useField(name)
    const { isSubmitting } = useFormikContext()
    useEffect(() => {
      if (props.value !== undefined && props.value !== '') {
        helper.setValue(props.value)
      }
    }, [props.value, helper])
    return (
      <div {...outerProps}>
        <label>
          {label ? label : null}
          <Input
            {...input}
            disabled={isSubmitting}
            {...props}
            ref={ref}
            onChange={e => {
              onChange?.(e)
              input.onChange(e)
            }}
            size="middle"
            style={{ width: '100%', height: '2.5rem', marginBottom: '.5rem' }}
          />
        </label>

        <ErrorMessages name={name} />
      </div>
    )
  }
)

export const LabeledInputPasswordField = forwardRef<
  typeof Input.Password,
  LabeledInputPasswordFieldProps
>(({ name, label, outerProps, ...props }, ref) => {
  const [input] = useField(name)
  const { isSubmitting } = useFormikContext()

  return (
    <div {...outerProps}>
      {label ? label : null}
      <Input.Password
        {...input}
        disabled={isSubmitting}
        {...props}
        ref={ref}
        size="middle"
        style={{ width: '100%', height: '2.5rem', marginBottom: '.5rem' }}
      />
      <ErrorMessages name={name} />
    </div>
  )
})

export default LabeledTextField
