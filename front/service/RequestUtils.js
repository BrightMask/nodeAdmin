/*
 * @Author: Austin.Xu
 * @Date: 2020-04-15 10:51:38
 * @LastEditTime: 2020-04-15 15:50:11
 * @LastEditors: Please set LastEditors
 * @Description: fetch 请求封装
 * @FilePath: /NodeAdmin/front/service/RequestUtils.js
 */
export default class requestUtils {
    static requestInit( method, path, params, headers) {
        let url = 'http://localhost:8081' + path;
        let request = {}
        switch(method) {
            case "GET" :
                request  = new Request(url, {
                    method: "GET",
                    headers: headers,
                })
            case "POST" :
                request  = new Request(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(params)
                })
            case "PUT" :
                request  = new Request(url, {
                    method: "PUT",
                    headers: headers,
                    body: JSON.stringify(params)
                })
            case "DELETE":
                request  = new Request(url, {
                    method: "DELETE",
                    headers: headers,
                    body: JSON.stringify(params)
                })
        }
        return requestss
    }
}