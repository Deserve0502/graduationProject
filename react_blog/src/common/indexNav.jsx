import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect,BrowserRouter } from 'react-router-dom'
export default class IndexNav extends Component {
  
  render() {
    return (
      <>
      <div className='index-nav'>  
      <span className='index-nav-logo'>
        顷&nbsp;&nbsp;刻
      </span>
      <ul className='index-nav-list'>
      <NavLink to='/index'>首页</NavLink>
        <NavLink to='/found'>发现</NavLink>
        <NavLink to='/found'>用户</NavLink>
        <NavLink to='/found'>即刻</NavLink>
        <NavLink to='/found'>关于</NavLink>
        <NavLink to='/found'>欢迎你</NavLink>
      </ul>
      </div>
      
      </>
    )

  }
}


