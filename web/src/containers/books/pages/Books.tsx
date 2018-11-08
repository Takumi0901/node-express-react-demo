import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import BooksList from '../organisms/BooksList'

const Books: React.SFC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>title</title>
      </Helmet>
      <BooksList />
    </React.Fragment>
  )
}

export default withRouter<any>(Books)
