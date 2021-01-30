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
// import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import { OverPack, Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import '../Style/index.css'
import {observer} from 'mobx-react';
@observer
export default class Index extends Component {
    state = {
        addMisShow: 'block',
        addShowflag: true,
        show: true,
    }
  




    render() {



        return (
            <>
                <div className="queue-demo" style={{ height: '6000px', backgroundColor: ' #f7f7f7' }}>
                    <QueueAnim type={['right', 'left']} className="demo-content">
                        {this.state.show ? [
                            <QueueAnim className="demo-page" key="header" type="bottom">
                                <div key="box" className="box">
                                    <QueueAnim type="bottom" component="ul">
                                        <IndexNav />
                                        <IndexBanner />
                                    </QueueAnim>
                                </div>
                            </QueueAnim>,
                            <QueueAnim className="demo-page1" key="page" type="bottom">
                                <QueueAnim type="bottom" component="ul"
                                    delay={300}
                                >
                                    <TrendingPost key="trending" />
                                    <PopularPost key='popular'/>
                                    <MostViewed key='mostviewed'/>
                                    <li key="0" />
                                    <li key="1" />
                                    <li key="2" />



                                </QueueAnim>

                            </QueueAnim>,
                            <div className="demo-footer" key="footer" />,
                        ] : null}
                    </QueueAnim>
                </div>

            </>
        )
    }
}






