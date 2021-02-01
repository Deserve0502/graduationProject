import { Component } from "react";
import React, { useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Parallax } from 'rc-scroll-anim';


export default class IndexNav extends Component {
  
  render() {
    return (
      <>
      <div className='index-nav'>  
      <span className='index-nav-logo'>
        顷&nbsp;&nbsp;刻
      </span>
      <ul className='index-nav-list'>
        <li>首页</li>
        <li>发现</li>
        <li>博客</li>
        <li>用户</li>
        <li>即刻</li>
        <li>关于</li>
        <li>欢迎你</li>
      </ul>
      </div>
      
      </>
    )

  }
}