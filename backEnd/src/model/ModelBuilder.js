/*
 * @Author: your name
 * @Date: 2020-06-01 15:07:07
 * @LastEditTime: 2020-06-01 15:08:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeAdmin/backEnd/src/model/ModelBuilder.js
 */ 
const mongoose = require('mongoose')
class ModelBuilder {
  /**
   * 构造model
   *
   * @param.name {String} collection name
   * @param.db {String} db name
   * @param.attributes {Object} 表字段定义
   * @param.statics {Object} 静态方法
   * @param.methods {Object} instance methods
   */
  static build ({name = '', db = 'newdb', attributes = {}, statics = {}, methods = {}}) {
    const schema = new mongoose.Schema(attributes)

    schema.set('timestamps', true)
    schema.set('minimize', false)
    schema.set('collection', name)
    schema.set('strict', false)
    schema.set('id', true)
    schema.set('toObject', {getters: true, virtuals: true, minimize: false, id: true})
    schema.set('toJSON', {getters: true, virtuals: true, minimize: false, id: true})

    schema.statics = statics
    schema.methods = methods

    const connection = mongoose.createConnection('mongodb://localhost:27017/' + db)
    const model = connection.model(name, schema)
    model.ObjectId = mongoose.Types.ObjectId

    return model
  }
}
module.exports = ModelBuilder
