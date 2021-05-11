import { h } from 'preact'
import { Router } from 'preact-router'
import { connect } from 'unistore/preact'

import { actions } from 'components/store.js'
import Header from 'components/header'

import Home from 'routes/home'
import Profile from 'routes/profile'

const App = () => (
  <div>
    <Header />
    <Router>
      <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
    </Router>
  </div>
)

export default connect([], actions)(App)
