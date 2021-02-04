import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink, Switch, Route, Redirect, ,BrowserRouter } from 'react-router-dom'
//import store from 
import QueueAnim from 'rc-queue-anim';
import { observer } from 'mobx-react'
import { Input, Space } from 'antd';
import '../../style/login.css'
import { PhoneOutlined } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

@observer
export default class Regist extends Component {
    state={
        cutdownFlag : false,
        sendRandomText:'发送验证码'
    }


    onSearch = (value,event )=> {

       this.setState({
           cutdownFlag:true,
           sendRandomText:'再次发送'+60
       },
       this.cutDown
       )
      
//   console.log(document.querySelector('#random-tele').parentElement) 
// document.querySelector('.ant-input-affix-wrapper').classList.remove('ant-input-affix-wrapper')

  document.querySelector('.ant-btn').classList.add('ant-btn1');
  document.querySelector('.ant-btn').classList.remove('ant-btn');
  
    }
  
    
    cutDown = () =>{
        let second = 6;
        this.timer = setInterval(() => {
           second--;
            this.setState({
                sendRandomText:'再次发送'+second
            })
            if(second===0){
                clearInterval(this.timer);
                this.setState({
                    cutdownFlag:false,
                    sendRandomText:'发送验证码'
                })
              
                document.querySelector('.ant-btn1').classList.add('ant-btn');
  document.querySelector('.ant-btn').classList.remove('ant-btn1');
            }
        }, 1000);
      
    }
    render() {
        return (
            <QueueAnim delay={300} >
            <div className='regist-contain' key='regist'>

           
       
      
    <Search
        id='random-tele'
       prefix={<PhoneOutlined  className="site-form-item-icon" />}
      placeholder="请输入您的电话号码"
      
      enterButton={this.state.sendRandomText}
     disabled={this.state.cutdownFlag}
  
      onSearch={this.onSearch}
    />
 </div>
            </QueueAnim>
)
}
}