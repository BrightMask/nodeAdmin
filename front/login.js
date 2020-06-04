/*
 * @Author: your name
 * @Date: 2020-04-09 10:44:31
 * @LastEditTime: 2020-06-04 11:24:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeAdmin/front/login.js
 */ 
import React, {Component} from 'react';
import { Form, Input, Button, Checkbox} from 'antd';
import ReactDom from 'react-dom';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './assets/style/common.css'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const Login = () =>  {

    const [form] = Form.useForm()
    
    const handleLogin = () => {
        console.log('aaaa')
        let params = JSON.stringify({
            username: 'admin',
            password: '111111'
        })
        fetch('http://localhost:3366/auth/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json;charset=UTF-8'
        },
        mode:'no-cors',
        body: params,
        cache:'default'
        })
    }
    return (
        <div className="login-page">
                <Form
                {...layout}
                form={form}
                name="basic"
                initialValues={{ remember: true }}
                className="login-form"
            >
                
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                   
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                        />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" className="login-submit-btn" onClick={handleLogin}> 登录</Button>
                </Form.Item>
            </Form>
        </div>
        
    )
}
ReactDom.render(<Login/>,document.getElementById("login"))
