/*
 * @Author: your name
 * @Date: 2020-06-04 10:39:23
 * @LastEditTime: 2020-06-04 15:26:06
 * @LastEditors: Please set LastEditors
 * @Description: 登录注册相关路由 -> 对应相关接口
 * @FilePath: /NodeAdmin/backEnd/src/routes/login.js
 */ 

const AuthController = require('../controller/AuthController')
const Router = require('koa-router')
const router = new Router({
    prefix:'/auth'
})

// 登录
router.post('/login', AuthController.authLogin )

module.exports = router