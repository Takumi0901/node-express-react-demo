import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from 'src/containers/app/App'
import Home from 'src/containers/home/pages/Home'
import Books from 'src/containers/books/pages/Books'

export default (
  <React.Fragment>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
      </Switch>
    </App>
  </React.Fragment>
)
