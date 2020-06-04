/*
 * @Author: your name
 * @Date: 2020-06-02 15:08:15
 * @LastEditTime: 2020-06-04 10:37:05
 * @LastEditors: Please set LastEditors
 * @Description:  数据库配置
 * @FilePath: /NodeAdmin/backEnd/src/config/DBconfig.js
 */ 
const mongoose = require('mongoose')
const DB_ADDRESS = "mongodb://localhost:27017/db"

// mongoose.connect(DB_ADDRESS)

// mongoose.connection.on('connected',function() {
//     console.log('Mongoose connection open to '+DB_URL);
//  });


// /**
// * 连接异常 error 数据库连接错误
// */
// mongoose.connection.on('error',function(err) {
//     console.log('Mongoose connection error: '+ err);
// });

// /**
// * 连接断开 disconnected 连接异常断开
// */
// mongoose.connection.on('disconnected',function() {
//     console.log('Mongoose connection disconnected');
// });
  
mongoose.connect(DB_ADDRESS, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if (err) {
        log.fatal({msg: '[Mongoose] database connect failed!', err})
    } else {
        console.log('数据库连接成功！')
    }
})
module.exports = mongoose