import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import store from '../store'
import { observer } from 'mobx-react';
import { NavLink, Switch, Route, Redirect,BrowserRouter } from 'react-router-dom'
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
    
        <NavLink to='/index'>首页</NavLink>
        <NavLink to='/found'>发现</NavLink>
        <NavLink to='/found'>用户</NavLink>
        <NavLink to='/found'>即刻</NavLink>
        <NavLink to='/found'>关于</NavLink>
        <NavLink to='/found'>欢迎你</NavLink>
     
      </ul>
         
            </div>
)
}
}