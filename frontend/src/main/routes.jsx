import React from 'react'
import { Router, Route, IndexRoute, Redirect, hasHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props=> (
    <Router history={hasHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycle' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />   
    </Router>
)