/*
 * @Author: your name
 * @Date: 2020-06-04 14:01:48
 * @LastEditTime: 2020-06-04 14:04:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeAdmin/backEnd/src/config/db/dbOperation.js
 */ 
// db/index.js
const mongoose = require('../DBconfig.js')
const Schema = mongoose.Schema;

const ceshiSchema = new Schema({
    title: String,
    body: String,
    date: Date
});

const MyModel = mongoose.model('ceshi', ceshiSchema);


class Mongodb {
    constructor () {

    }
    // 查询
    query () {
        return new Promise((resolve, reject) => {
            MyModel.find({}, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    // 保存
    save (obj) {
        const m = new MyModel(obj)
        return new Promise((resolve, reject)=> {
            m.save((err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
                console.log(res)
            })
        })
    }
}
module.exports = new Mongodb()
