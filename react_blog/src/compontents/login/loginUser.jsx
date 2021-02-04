import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink, Switch, Route, Redirect, ,BrowserRouter } from 'react-router-dom'
//import store from 
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined,EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../style/login.css'
import { observer } from 'mobx-react'
@observer
export default class LoginUser extends Component {
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    render() {
        return (
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
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    忘记密码？
</a>
                <NavLink to='/login/regist' className="login-form-forgot" >
                    手机号注册/登录
</NavLink>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登陆
</Button>

            </Form.Item>
        </Form>
)
}
}