import React, { Component } from 'react'
import IndexNav from '../common/indexNav'
import IndexBanner from '../compontents/index/indexBanner'
import TrendingPost from '../compontents/index/trendingPost'
import PopularPost from '../compontents/index/popularPost'
import MostViewed from '../compontents/index/mostViewed'
import ScrollNav from '../common/scrollNav'
import Goback from '../common/goTop'
import Footer from '../common/footer'
import QueueAnim from 'rc-queue-anim';

import ParticlesBg from 'particles-bg'
import store from '../store'
import '../style/index.css'
import { observer } from 'mobx-react';
@observer
export default class Index extends Component {
    componentDidMount(){
        store.changeScroll('false')
    }
    state = {
        show: true,

    }
    render() {
        return (
            <>
            <ScrollNav />
            <Goback />
                <div style={{ height: '5460px', position:'relative' }}>
                <ParticlesBg  type = 'cobweb'  bg = { true }  
                color='#0f8b8d' num={300} />
                <Footer  />
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






