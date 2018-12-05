import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import { WrappedFieldProps } from 'redux-form'

type FieldProps = {
  label?: string
  errortext?: any
} & WrappedFieldProps

const FieldText: React.SFC<FieldProps> = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField label={label} errortext={touched && error ? error : ''} {...input} {...custom} />
)

export default FieldText
