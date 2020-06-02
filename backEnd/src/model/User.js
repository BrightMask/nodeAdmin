/*
 * @Author: your name
 * @Date: 2020-06-01 15:08:48
 * @LastEditTime: 2020-06-01 15:08:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeAdmin/backEnd/src/model/User.js
 */ 
const ModelBuilder = require('./ModelBuilder.js')

module.exports = ModelBuilder.build({
  name: 'user',
  attributes: {
    name: {type: String}
  },

  statics: {
    /**
     * 取某个用户
     */
    async getUser (userId) {
      let user = await this.findById(userId)
      if (!user) {
        throw new Error('error')
      }
      return user
    }
  }
})
