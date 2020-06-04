/*
 * @Author: your name
 * @Date: 2020-04-10 10:53:36
 * @LastEditTime: 2020-06-04 17:14:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeAdmin/front/router/router.js
 */ 
export const RouterMap = [
    {
        name: '首页',
        path: 'homepage',
        component: './containers/homepage/index.js'
    },
    {
        name: '用户管理',
        path: 'userManager',
        component: './containers/user/index.js'

    }
]