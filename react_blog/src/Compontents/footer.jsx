import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import store from '../store'
import { observer } from 'mobx-react'
@observer
export default class Footer extends Component {
    render() {
        return (
            <footer>
            <ul className='safe'>
                <li className='footer-title'>联系我</li>
                <li>商洛学院 数计院 计算机科学与技术 计科1701 王洁</li>
                <li>15202959678</li>
                <li>1347475525@qq.com</li>
                <li>
                    <span></span>
                </li>
                <li className='footer-copy'>©2021 顷刻 - 毕业设计。</li>
            </ul>
            </footer>
)
}
}