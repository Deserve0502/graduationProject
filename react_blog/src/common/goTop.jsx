import React, { Component, useState } from 'react'
import { UpOutlined } from '@ant-design/icons';
import store from '../store'
import { observer } from 'mobx-react';

@observer export default class Gotop extends Component {
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
                this.setState({
                    goTopShow:true
                })
                store.changeScroll('true')
              } else {
                this.setState({
                    goTopShow:false
                })
                store.changeScroll('false')
              }
            if (!this.state.isTop) {
              clearInterval(this.timer)
            }
            this.setState({
                isTop : false
            })
           
          },true)
    }
    componentWillUnmount = () => {
      this.setState = (state,callback)=>{
        return;
      };
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
          <>
          {this.state.goTopShow===false?'':
          <div className='goTop' onClick={()=>{this.handleScroll()}}>
            <span className='icon-before'><UpOutlined /></span>
            <span className='icon-after'><UpOutlined /></span>
            </div>
          }
          
            </>
)
}
}