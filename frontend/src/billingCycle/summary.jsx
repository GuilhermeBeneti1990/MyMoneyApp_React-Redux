import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debit}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resume</legend>
            <Row>
                <ValueBox cols='12 4' color='grenn' icon='bank' value={`$ ${credit}`} />
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`$ ${debit}`} />
                <ValueBox cols='12 4' color='blue' icon='money' value={`$ ${credit - debit}`} text='Total' />
            </Row>
        </fieldset>
    </Grid>
)