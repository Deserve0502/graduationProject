import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink, Switch, Route, Redirect, ,BrowserRouter } from 'react-router-dom'
//import store from 
import '../../style/found.css'
import { EyeOutlined,MessageOutlined,LikeOutlined} from '@ant-design/icons';
import { observer } from 'mobx-react'
@observer
export default class FoundCategoryList extends Component {
    render() {
        return (
            <div className='safe'>
            <div className='cate-contain'>
            <li className='cate-list'>
            <div className='cate-list-img'>
            <img src="../foundImg/food.jpg"/>
            </div>
            <div className='cate-list-main'>
            <div className='cate-list-title'>
            布拉布拉布拉布拉布拉布拉布拉布拉
            </div>
            <div className='cate-list-classify'>
            运动
            </div>
            <div className='cate-list-icon'>
                <span>
                <EyeOutlined /> 
                12
                </span>
                <span>
                <MessageOutlined /> 
                12
                </span>
                <span>
                <LikeOutlined /> 
                12
                </span>
            </div>
            </div>
            <div className='cate-list-auhotor'>
                as
            </div>
            </li>
            <li className='cate-list'></li>
            <li className='cate-list'></li>
            <li className='cate-list'></li>
            <li className='cate-list'></li>
            </div>
            </div>
)
}
}