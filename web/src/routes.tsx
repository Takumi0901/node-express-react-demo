import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from 'src/containers/app/App'
import Home from 'src/containers/home/pages/Home'
import Users from 'src/containers/users/pages/Users'
import UserCreate from 'src/containers/users/pages/Create'

export default (
  <React.Fragment>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/create" component={UserCreate} />
      </Switch>
    </App>
  </React.Fragment>
)
