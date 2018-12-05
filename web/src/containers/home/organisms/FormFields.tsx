import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { Field } from 'redux-form'
import { formEnhancer, AllFormProps } from '../enhancers/Form'
import Paper from '@material-ui/core/Paper/Paper'
import FieldText from 'src/components/atoms/FieldText'

const FormFields: React.SFC<AllFormProps> = () => {
  return (
    <Paper className={'u-pt-24 u-pr-24 u-pb-24 u-pl-24 u-mb-24'} square elevation={0}>
      <Typography variant="headline">Form Element</Typography>
      <Field component={FieldText} name="search" type="text" label={'hogehoge'} />
      <br />
      <Field component={FieldText} name="hgoehoge" type="text" label={'fugafuga'} />
    </Paper>
  )
}

export const FormFieldsElement = formEnhancer(FormFields)
