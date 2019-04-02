import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render () {
        const { credit, debit } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' smal='1.0 Version' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`USD ${credit}`} text='Credit Total' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`USD ${debit}`} text='Debits Total' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`USD ${credit - debit}`} text='Value' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)