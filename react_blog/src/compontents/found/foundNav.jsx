import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink, Switch, Route, Redirect, ,BrowserRouter } from 'react-router-dom'
//import store from 
import { CaretUpOutlined } from '@ant-design/icons';
import '../../style/found.css'
import { observer } from 'mobx-react'
@observer
export default class FoundNav extends Component {
    render() {
        return (
            <div className='found-nav-banner'>
<img src="../foundImg/all.jpg" alt="" />
<div className='found-nav-list-con safe'>
<div className='found-cate-list'>
    <span>全部</span>
    <span>/</span>
    <span>爱好</span>
    <span>/</span>
    <span>时尚</span>
    <span>/</span>
    <span>旅行</span>
    <span>/</span>
    <span>冒险</span>
    <span>/</span>
    <span>食物</span>
    <span>/</span>
    <span>运动</span>
    <span>/</span>
    <span>生活方式</span>
    <span>/</span>
    <span>科技</span>
</div>
<div className='found-cate-sorce'>
    <span>热度
    <span><CaretUpOutlined /></span>
    </span>
    <span>收藏量
    <span><CaretUpOutlined /></span>
    </span>
    <span>回复量
    <span><CaretUpOutlined /></span>
    </span>
    <span>时间范围
    <span><CaretUpOutlined /></span>
    </span>
</div>
<div className='found-search'>

</div>
</div>
            </div>
)
}
}