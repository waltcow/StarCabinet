import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'

/* containers */
import App from './containers/App'
import HomePage from './containers/HomePage'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/" component={HomePage}/>
    {/* <Redirect from='*' to='/404'/> */}
  </Route>
)

export default routes