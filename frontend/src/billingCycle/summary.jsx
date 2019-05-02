import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debit}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resume</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`$ ${credit}`} text='Credits Total' />
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`$ ${debit}`} text='Debits Total' />
                <ValueBox cols='12 4' color='blue' icon='money' value={`$ ${credit - debit}`} text='Amount Total' />
            </Row>
        </fieldset>
    </Grid>
)