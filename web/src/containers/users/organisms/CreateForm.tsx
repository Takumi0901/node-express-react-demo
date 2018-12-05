import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { Field } from 'redux-form'
import { formEnhancer, AllFormProps } from '../enhancers/CreateForm'
import Paper from '@material-ui/core/Paper/Paper'
import FieldText from 'src/components/atoms/FieldText'
import Button from '@material-ui/core/Button/Button'

const CreateForm: React.SFC<AllFormProps> = props => {
  const { handleSubmit, onSubmit } = props
  return (
    <Paper className={'u-pt-24 u-pr-24 u-pb-24 u-pl-24 u-mb-24'} square elevation={0}>
      <Typography variant="headline">ユーザー登録</Typography>
      <Field component={FieldText} name="name" type="text" label={'ユーザー名を入力'} />
      <div style={{ marginTop: '24px' }}>
        <Button variant="contained" onClick={() => handleSubmit(onSubmit())}>
          Create
        </Button>
      </div>
    </Paper>
  )
}

export default formEnhancer(CreateForm)
