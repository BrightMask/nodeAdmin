/*
 * @Author: your name
 * @Date: 2020-06-02 16:46:03
 * @LastEditTime: 2020-06-02 17:06:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeAdmin/backEnd/src/model/UserModel.js
 */ 
const mongoose = require('mongoose');  
const { Schema, model } = mongoose;

// 用户的数据库模型  
let userSChemea = new Schema({
    date: { type: String, required: true, unique: true },
    list: { type: Array, require: true },
});

module.exports = model('DateNumber', DateNumberSchema);