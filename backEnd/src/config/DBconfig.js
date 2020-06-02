/*
 * @Author: your name
 * @Date: 2020-06-02 15:08:15
 * @LastEditTime: 2020-06-02 16:43:50
 * @LastEditors: Please set LastEditors
 * @Description:  数据库配置
 * @FilePath: /NodeAdmin/backEnd/src/config/DBconfig.js
 */ 
const mongoose = require('mongoose')
const DB_ADDRESS = "mongodb://localhost:27017/db"
mongoose.connect(DB_ADDRESS, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if (err) {
        log.fatal({msg: '[Mongoose] database connect failed!', err})
    } else {
        console.log('[Mongoose] database connect success!')
    }
})
module.exports = mongoose