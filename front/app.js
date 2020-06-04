/*
 * @Author: your name
 * @Date: 2020-04-03 17:17:48
 * @LastEditTime: 2020-06-04 17:48:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeAdmin/front/app.js
 */ 
import React from 'react'
import ReactDom from 'react-dom';
import {Layout, Breadcrumb, Menu} from "antd";
import { HashRouter, Route, NavLink } from 'react-router-dom'
import HeaderUser from './components/HeaderUser';
import {RouterMap} from './router/router'

import './assets/style/common.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component {

    constructor (props) {
        super(props)
        console.log('RouterMap=====', RouterMap)
    }

    asyncPageCompoent(routes) {
        const asyncImport = component =>  Loadable({
            loader: () => import(component),
            loading: PageLoading,
        });
    
        let pageRouter = routes.map((item, index) => {
            return (
                <Route
                    key={index}
                    path={item.path}
                    component={asyncImport(item.component)}
                />
            )
        })
    
        console.log('pageRouter=====', pageRouter)
        return pageRouter
    }


    render(){
        return (
            <HashRouter hashHistory={history}>
                <Layout style={{width: '100vw', height: '100vh', backgroundColor:'#f4f5f5'}}>
                    <Header className="page-header" >
                        <h3 style={{color: '#fff'}}></h3>
                        <HeaderUser />
                    </Header>
                    <Layout>
                        <Sider width={200} theme="light">
                            <Menu
                                mode="inline"
                            >   
                                {
                                    RouterMap.map((menuItem, index) => {
                                        return (

                                            <Menu.Item key={index}>
                                                <NavLink to={menuItem.path}/>
                                                {menuItem.name}
                                            </Menu.Item>
                                            
                                        )
                                    })
                                       
                                }
                                
                            </Menu>
                        </Sider>
                        <Layout className="page-content">
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>商品</Breadcrumb.Item>
                                <Breadcrumb.Item>鲜花</Breadcrumb.Item>
                            </Breadcrumb>

                            <Content
                                className="page-container-content"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                                >
                                    {
                                       this.asyncPageCompoent(RouterMap)
                                    }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>

            </HashRouter>

        )
    }
}
ReactDom.render(<App/>, document.getElementById("app"))
