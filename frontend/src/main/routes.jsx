import React from 'react'
import { Router, Route, Redirect, hasHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props=> (
    <Router history={hasHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycle' component={Dashboard} />
        <Redirect from='*' to='/' />   
    </Router>
)