/*
 * @Author: Austin.Xu
 * @Date: 2020-04-15 15:43:14
 * @LastEditTime: 2020-04-15 15:50:00
 * @LastEditors: Please set LastEditors
 * @Description: api 相关接口
 * @FilePath: /NodeAdmin/front/service/APIService.js
 */
import RequestUtils from './RequestUtils' 

export default class APIService {
    // 登录
    static login(params) {
        let request = RequestUtils.requestInit('POST', '/login', params)
    }
}