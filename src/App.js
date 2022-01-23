import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './pages/DashBoard'
import BuySave from './pages/BuySave'
import EShop from './pages/EShop'
import Otp from './pages/Otp'
import Register from './pages/Register'
import Welcome from './pages/Welcome'
import CreateYourOwnPlan from './pages/CreateYourOwnPlan'
import SubscriptionDetails from './pages/SubscriptionDetails'
import Success from './pages/Success'
import Failure from './pages/Failure'
import Requested from './pages/Requested'
import itemDetails from './pages/itemDetails'
import Items from './pages/Items'
import AddAddress from './pages/AddAddress'
import AddBank from './pages/AddBank'
export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/verify' component={Otp} />
            <Route path='/register' component={Register} />
            <Route path='/Shop-Gold' component={EShop} />
            <Route path='/Subscribe' component={BuySave} />
            <Route path='/Welcome' component={Dashboard} />
            <Route path='/Create' component={CreateYourOwnPlan} />
            <Route
              path='/Subscription-Details'
              component={SubscriptionDetails}
            />
            <Route path='/Success' component={Success} />
            <Route path='/Failure' component={Failure} />
            <Route path='/Requested' component={Requested} />
            <Route path='/Requested' component={Requested} />
            <Route path='/Item-details' component={itemDetails} />
            <Route path='/Items' component={Items} />
            <Route path='/add-address' component={AddAddress} />
            <Route path='/add-bank' component={AddBank} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
