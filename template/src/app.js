import { Router } from 'preact-router'

import { connect, actions } from '@store'

import Home from 'routes/home'
import Profile from 'routes/profile'

import Header from 'components/header'

export default connect([], actions)(() => (
  <div>
    <Header />
    <Router>
      <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
    </Router>
  </div>
))
