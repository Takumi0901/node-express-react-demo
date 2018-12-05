import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import UsersList from '../organisms/UsersList'

const Users: React.SFC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>title</title>
      </Helmet>
      <UsersList />
    </React.Fragment>
  )
}

export default withRouter<any>(Users)
