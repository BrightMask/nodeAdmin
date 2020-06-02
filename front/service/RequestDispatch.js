/*
 * @Author: Austin.Xu
 * @Date: 2020-04-15 15:52:20
 * @LastEditTime: 2020-04-15 17:31:47
 * @LastEditors: Please set LastEditors
 * @Description: 请求分发
 * @FilePath: /NodeAdmin/front/service/RequestDispatch.js
 */
export default class RequestDispatch {
    
    // dispatch分发处理
    static handleDispatch() {
        // return dispatch({
        // })
    }
    //  请求结果通过dispatch进行分发
    static handleRequestDispatch() {
        
    }

    // 不通过dispatch 进行分发
    static handlePromise(request, responseType) {
        return fetch(request)
            .then(res => {
                if(res.status === 200) {
                    switch(responseType) {
                        case 'arrayBuffer':
                            return res.arrayBuffer()
                        default: 
                            return res.json()
                    }
                }
            })
            .catch(res => {
                res.json().then(function(e) {
                    if(e.status === 400) {
                        
                    } 
                })
            })
    }

}