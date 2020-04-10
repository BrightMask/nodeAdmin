import React from 'react'
import ReactDom from 'react-dom';
import {Layout, Breadcrumb, Menu} from "antd";
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom'

import HeaderUser from './components/HeaderUser';
import PageLoading from './components/PageContainer'
import './assets/style/common.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component {

    constructor (props) {
        super(props)
    }

    // 按需加载组件
    LoadableComponent = () => {
        console.log('test')
        // let defaultPath = ''

        // const importComponent = (component) => Loadable({
        //     loader: () => import('./' + component + '.js'),
        //     loading: PageLoading
        // })

        // const appRouters = [
            

        // ]

    }

    render(){
        return (
            <Layout style={{width: '100vw', height: '100vh', backgroundColor:'#f4f5f5'}}>
                <Header className="page-header" >
                    <h3 style={{color: '#fff'}}>门店管理</h3>
                    <HeaderUser />
                </Header>
                <Layout>
                    <Sider width={200} theme="light">
                        <Menu
                            mode="inline"
                        >
                             <Menu.Item>首页</Menu.Item>
                            <SubMenu title="商品">
                                <Menu.Item>绿植</Menu.Item>
                                <Menu.Item>鲜花</Menu.Item>
                                <Menu.Item>资材</Menu.Item>
                            </SubMenu>
                            <SubMenu title="财务">
                                <Menu.Item>进货</Menu.Item>
                                <Menu.Item>销货</Menu.Item>
                            </SubMenu>
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
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))
