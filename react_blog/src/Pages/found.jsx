
import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink, Switch, Route, Redirect, ,BrowserRouter } from 'react-router-dom'
//import store from 
import QueueAnim from 'rc-queue-anim';
import { Parallax } from 'rc-scroll-anim';
import ParticlesBg from 'particles-bg'
import store from '../store'
import Goback from '../common/goTop'
import Footer from '../common/footer'
import ScrollNav from '../common/scrollNav'
import IndexNav from '../common/indexNav'
import FoundNav from '../compontents/found/foundNav'

import { observer } from 'mobx-react'
@observer
export default class Found extends Component {
    componentDidMount(){
        store.changeScroll('false')
    }
    state = {
        show: true,

    }
    render() {
        return (
            <>
            <Goback />
            <ScrollNav/>
                <div style={{ height: '5460px', position:'relative' }}>
                <ParticlesBg  type = 'cobweb'  bg = { true }  
                color='#0f8b8d' num={300} />
                <Footer  />
                
                    <QueueAnim className="demo-content">
                        {this.state.show ? [
                            <QueueAnim  
                            key='found-contain' >
                                <div key="found" >
                                    <QueueAnim component="ul">
                                        <IndexNav 
                                            key='found-indexnav'
                                        />
                                        <FoundNav 
                                            key='found-foundnav'
                                        />
                                        
                                    </QueueAnim>
                                </div>
                            </QueueAnim>,
                       
                          
                        ] : null}
                    </QueueAnim>
                </div>
            </>
)
}
}




