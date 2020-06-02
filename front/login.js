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
                    <Button type="primary" className="login-submit-btn"> 登录</Button>
                </Form.Item>
            </Form>
        </div>
        
    )
}
ReactDom.render(<Login/>,document.getElementById("login"))
