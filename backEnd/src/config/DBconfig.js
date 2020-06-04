/*
 * @Author: your name
 * @Date: 2020-06-02 15:08:15
 * @LastEditTime: 2020-06-04 14:44:11
 * @LastEditors: Please set LastEditors
 * @Description:  连接mongoDB
 * @FilePath: /NodeAdmin/backEnd/src/config/DBconfig.js
 */ 
const mongoose = require('mongoose')
const DB_ADDRESS = "mongodb://localhost:27017/db"
  
const db = mongoose.createConnection(DB_ADDRESS, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, err => { 
        if (err) {
            log.fatal({msg: '[Mongoose] database connect failed!', err})
        } else {
            console.log('数据库连接成功！')
        }
    }
)

db.on('error',(err)=>{console.log(err)})
db.on('open',()=>{console.log('mongodb连接成功')})

const Schema = mongoose.Schema     //得到Schema构造函数
const UserShcema = new Schema({   //用Schema定义插入数据的类型
    name:{
       type:String,
         required:true
    },
    age:Number,
    sex:{
       type:String,
         default:"男"
    }
 },{
     versionKey: false, timestamps: {
    createdAt: "created"
}})

const Users = db.model('user',UserShcema)
module.exports = Users