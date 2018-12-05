import { connect } from 'react-redux'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { compose, withHandlers } from 'recompose'
import API from 'src/api/API'
import { withSnackbar } from 'notistack'

export type AllFormProps = Props & InjectedFormProps<FormData, Props>

export interface Props {
  onSubmit: () => void
}

const connector = connect(() => {
  return {}
})

export const formEnhancer = compose<AllFormProps, {}>(
  connector,
  withSnackbar,
  withHandlers({
    onSubmit: props => values => {
      API.postUser(values)
        .then(() => props.enqueueSnackbar('Success'))
        .catch(() => props.enqueueSnackbar('Error', { variant: 'error' }))
    }
  }),
  reduxForm({
    form: 'userCreate',
    enableReinitialize: true
  })
)
