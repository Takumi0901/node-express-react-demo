import { connect } from 'react-redux'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { compose, withHandlers } from 'recompose'
import API from 'src/api/API'

export type AllFormProps = Props & InjectedFormProps<FormData, Props>

export interface Props {
  onSubmit: () => void
}

const connector = connect(() => {
  return {}
})

export const formEnhancer = compose<AllFormProps, {}>(
  connector,
  withHandlers({
    onSubmit: () => values => {
      console.log(values)
      API.postUser(values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }),
  reduxForm({
    form: 'userCreate',
    enableReinitialize: true
  })
)
