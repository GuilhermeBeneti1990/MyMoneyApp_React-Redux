import React, { Component } from 'react'
import { bindActionCreator, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import List from './billingCycleList'
import Form from './billingCycleForm'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create, update, remove } from './billingCycleActions'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
    render() {
        return (
            <div>
                <ContentHeader title='Billing Cycles' small='Register'></ContentHeader>
                <Content>
                   <Tabs>
                       <TabsHeader>
                            <TabHeader label='List' icon='bars' target='tabList'></TabHeader>
                            <TabHeader label='Register' icon='plus' target='tabCreate'></TabHeader>
                            <TabHeader label='Edit' icon='pencil' target='tabUpdate'></TabHeader>
                            <TabHeader label='Delete' icon='trash-o' target='tabDelete'></TabHeader>
                       </TabsHeader>
                       <TabsContent>
                            <TabContent id='tabList'>
                                <List/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} submitLabel='Register' submitClass='primary'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form  onSubmit={this.props.update} submitLabel='Update' submitClass='info'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                            <Form  onSubmit={this.props.remove} readOnly={true} submitLabel='Remove' submitClass='danger'/>
                            </TabContent>
                       </TabsContent>
                   </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispacth => bindActionCreators({selectTab, showTabs, create, update, remove}, dispacth)
export default connect(null, mapDispatchToProps)(BillingCycle)