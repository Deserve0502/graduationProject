import React, { Component } from 'react'
// import ReactDom from 'react-dom'
// import PropTypes from 'prop-types'
// import axios from 'axios'
// import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import Addmission from '../Compontents/admission'
import IndexNav from '../Compontents/indexNav'
import IndexBanner from '../Compontents/indexBanner'
import TrendingPost from '../Compontents/trendingPost'
import PopularPost from '../Compontents/popularPost'
import MostViewed from '../Compontents/mostViewed'
import ScrollNav from '../Compontents/scrollNav'
import QueueAnim from 'rc-queue-anim';
import { Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import store from '../store'
import '../Style/index.css'
import { observer } from 'mobx-react';
@observer
export default class Index extends Component {
    state = {
        show: true,
        srcollNavShow: false,
    }
    render() {
        return (
            <>
                <ScrollNav />
                <div style={{ height: '6000px', backgroundColor: ' #f7f7f7' }}>
                    <QueueAnim className="demo-content">
                        {this.state.show ? [
                            <QueueAnim  key="header" >
                                <div key="box" >
                                    <QueueAnim component="ul">
                                        <IndexNav />
                                        <IndexBanner />
                                    </QueueAnim>
                                </div>
                            </QueueAnim>,
                            <QueueAnim key="page" >
                                <Parallax
                                    animation={{ x: 0, playScale: [0.3, 0.4], onComplete: () => { store.changeScroll('true') }, onStartBack: () => { store.changeScroll('false') } }}
                                />
                                <QueueAnim component="ul"
                                    delay={300}
                                >
                                    <TrendingPost key="trending" />
                                    <PopularPost key='popular' />
                                    <MostViewed key='mostviewed' />
                                </QueueAnim>

                            </QueueAnim>,
                          
                        ] : null}
                    </QueueAnim>
                </div>

            </>
        )
    }
}






