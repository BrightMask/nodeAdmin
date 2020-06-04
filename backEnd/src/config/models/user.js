/*
 * @Author: your name
 * @Date: 2020-06-04 14:53:46
 * @LastEditTime: 2020-06-04 15:25:27
 * @LastEditors: Please set LastEditors
 * @Description: 用户数据库模型
 * @FilePath: /NodeAdmin/backEnd/src/config/models/user.js
 */ 
const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    sex: Number
})

module.exports = mongoose.model('Person',personSchema)