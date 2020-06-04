/*
 * @Author: your name
 * @Date: 2020-06-04 10:41:23
 * @LastEditTime: 2020-06-04 11:22:31
 * @LastEditors: Please set LastEditors
 * @Description: 登录注册相关controller
 * @FilePath: /NodeAdmin/backEnd/src/controller/AuthController.js
 */ 


const authLogin = async (ctx, next) => {
    let {username, password} = ctx

    if(username == 'admin' && password == '111111') {
        ctx.body = {
            status: 200,
            message: '登录成功'
        }
        return
    } else {
        ctx.body = {
            status: 400,
            message: '登录失败'
        } 
        return
    }
}

const authTest = async(ctx, next) => {
    ctx.body = 'hello world'  
}

module.exports = {
    authLogin,
    authTest
}