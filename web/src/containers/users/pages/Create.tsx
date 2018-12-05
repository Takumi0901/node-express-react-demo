import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import CreateForm from '../organisms/CreateForm'

const Users: React.SFC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>ユーザー登録</title>
      </Helmet>
      <CreateForm />
    </React.Fragment>
  )
}

export default withRouter<any>(Users)
