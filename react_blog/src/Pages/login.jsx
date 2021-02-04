import React, { Component } from 'react'
import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import { observer } from 'mobx-react'
import LoginRouter from '../compontents/login/router'

@observer export default class Login extends Component {
  
     onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    render() {
     
        
        return (
         
            <div className='login' >
               <QueueAnim delay={300} className="queue-simple">
            <div className='login-contain' key='login'>
            <img src="../login.jpeg" alt=""/>
            <div className='login-input'>
            <div className='login-title'>
           <span>顷刻</span> 
            <p className='login-title-intro'>你的生活分享平台</p>
            </div>

           <LoginRouter></LoginRouter>
            </div>
            </div>
            </QueueAnim>
            </div>
         
)
}
}