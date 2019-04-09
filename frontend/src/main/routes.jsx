import React from 'react'
import { Router, Route, IndexRoute, Redirect, hasHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props=> (
    <Router history={hasHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycle' component={Dashboard} />
        </Route>
        <Redirect from='*' to='/' />   
    </Router>
)