/*
 * @Author: your name
 * @Date: 2020-06-01 15:06:22
 * @LastEditTime: 2020-06-01 15:06:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /NodeAdmin/backEnd/src/model/index.js
 */ 
const fs = require('fs')
const path = require('path')
// 将文件夹中的model导出
const models = fs.readdirSync(path.resolve(__dirname, './'))
let ret = {}
for (const model of models) {
  if (model === 'index.js' || model === 'ModelBuilder.js') {
    continue
  }
  ret[model.slice(0, model.indexOf('.js'))] = require(`./${model}`)
}
module.exports = ret
