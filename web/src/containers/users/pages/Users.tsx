import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import UsersList from '../organisms/UsersList'
import Button from '@material-ui/core/Button/Button'

interface Props {
  history: {
    push: (path: string) => void
  }
}

const Users: React.SFC<Props> = props => {
  return (
    <React.Fragment>
      <Helmet>
        <title>ユーザー一覧</title>
      </Helmet>
      <div style={{ marginBottom: '24px', textAlign: 'right' }}>
        <Button variant="contained" onClick={() => props.history.push('/users/create')}>
          Create
        </Button>
      </div>
      <UsersList />
    </React.Fragment>
  )
}

export default withRouter<any>(Users)
