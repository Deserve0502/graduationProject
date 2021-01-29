import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import '../Style/post.css'
import QueueAnim from 'rc-queue-anim';
import { OverPack, Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import '../Style/index.css'
import { Select,Pagination } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
export default class MostViewed extends Component {
    render() {
        return (
            <div className='viewed-container safe'>
            <div className='index-page-title'>
                <p>最多点击</p>
                <p>Most Viewed</p>
            </div>
            <OverPack style={{ overflow: 'hidden', height: 200,width:'90%',margin:'auto', }}
                    always={false}
                >
            <div className='viewed-contain'>

            </div>

                </OverPack>
                </div>
        )}}