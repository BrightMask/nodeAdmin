/*
 * @Author: your name
 * @Date: 2020-06-04 15:26:29
 * @LastEditTime: 2020-06-04 15:37:28
 * @LastEditors: Please set LastEditors
 * @Description: 用户相关接口
 * @FilePath: /NodeAdmin/backEnd/src/routes/user.js
 */ 
const UserController = require('../controller/UserController')
const Router = require('koa-router')
const router = new Router({
    prefix: '/user'
})

// 用户列表查询
router.get('/search', UserController.searchUser)
// 用户新增
router.post('/add', UserController.addUser)
// 用户编辑
router.put('/edit', UserController.updateUser)
// 用户删除
router.delete('/delete', UserController.deleteUser)
// 用户详情
router.get('/detail', UserController.getUser)

module.exports = router