/*
 * @Author: your name
 * @Date: 2020-04-14 16:01:10
 * @LastEditTime: 2020-06-02 15:09:07
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件 注册了router和各种中间件。
 * @FilePath: /NodeAdmin/backEnd/src/app.js
 */ 
const Koa = require('koa')
const cors = require('koa-cors')
const app = new Koa()
const router = require('./router')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser()) // 把koa2上下文的formData数据解析到ctx.request.body中
app.use(cors()) // 解决跨域问题
app.use(router.routes()) // 使用路由中间件处理路由
app.listen(3366) // 监听3366端口
console.log('app is stared & listening on port 3366')

