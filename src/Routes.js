import React, { Component } from 'react'
import { Dashboard } from '@material-ui/icons'
import { Route, Switch } from 'react-router-dom'
import BuySave from './pages/BuySave'
import EShop from './pages/EShop'
import Otp from './pages/Otp'
import Register from './pages/Register'
import Welcome from './pages/Welcome'
import CreateYourOwnPlan from './pages/CreateYourOwnPlan'
import { Router } from 'react-router'

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route exact path='/verify'>
            <Otp />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default Routes
