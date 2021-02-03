import React, { Component } from 'react'
import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import { observer } from 'mobx-react'


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
            <p className='login-title'>
           <span>顷刻</span> 
            <p className='login-title-intro'>你的生活分享平台</p>
            </p>

            <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入您的用户名!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入您的密码！',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码？
        </a>
        <NavLink to='/regist' className="login-form-forgot" >
         手机号注册/登录
        </NavLink>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
         登陆
        </Button>
      
      </Form.Item>
    </Form>
            </div>
            </div>
            </QueueAnim>
            </div>
         
)
}
}