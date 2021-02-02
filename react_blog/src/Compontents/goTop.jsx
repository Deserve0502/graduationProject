import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
//import store from 
import { observer } from 'mobx-react'
@observer
export default class Gotop extends Component {
    state ={
        clientHeight:document.documentElement.clientHeight,
        timer : null,
        isTop : true,
        goTopShow:false
    }
  
  
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
         
            if (osTop >= 100) {
                console.log('hh')
                this.setState({
                    goTopShow:true
                })
              } else {
                this.setState({
                    goTopShow:false
                })
              }
            if (!this.state.isTop) {
              clearInterval(this.timer)
            }
            this.setState({
                isTop : false
            })
           
          },true)
    }
     
    handleScroll = ()=>{    
        this.timer = setInterval(()=> {
            // 获取滚动条距离顶部的高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop
            var ispeed = Math.floor(-osTop / 5)
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
            this.setState({
                isTop : true
            })
            if (osTop === 0) {
              clearInterval(this.timer)
            }
          }, 30)
        
        
       
    }
    render() {
        return (
            <div className='goTop' onClick={()=>{this.handleScroll()}}>
            qqqq
            </div>
)
}
}