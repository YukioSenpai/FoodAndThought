import { ErrorMessage } from 'formik'
import React from 'react'

interface Props {
  name: string
}

export const ErrorMessages: React.FC<Props> = ({ name }) => (
  <ErrorMessage name={name}>
    {msg => (
      <div role="alert" style={{ color: '#C70039' }}>
        {msg}
      </div>
    )}
  </ErrorMessage>
)
