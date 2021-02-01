import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import store from '../store'
import { observer } from 'mobx-react';
@observer
export default class ScrollNav extends Component {
    static propTypes = {
        srcollNavShow:PropTypes.any,
        }; 
    state={
        scrollshow:store.scrollshow
    }
  
  
    render() {
        return (
            <div className='scroll-nav' style={store.scrollshow==='true'?{transform: 'translateY(0)',transition:'0.5s'}:{transform: 'translateY(-70px)',transition:'0s'}}>
             <span className={store.scrollshow==='true'?'scroll-nav-logo':'index-nav-logo'}
            

             >
        顷&nbsp;&nbsp;刻
      </span>
      <ul className={store.scrollshow==='true'?'scroll-nav-list':'index-nav-list'}>
        <li>首页</li>
        <li>发现</li>
        <li>博客</li>
        <li>用户</li>
        <li>即刻</li>
        <li>关于</li>
        <li>欢迎你</li>
      </ul>
         
            </div>
)
}
}