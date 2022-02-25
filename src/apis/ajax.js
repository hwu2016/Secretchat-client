import axios from "axios";

/**
 * 封装Axios，统一处理异常
 * @param url 
 * @param data 
 * @param type 
 * @returns 
 */
export default function ajax(url, data = {}, type) {
    return new Promise((res, rej) => {
        let p
        switch (type) {
            case 'GET':
                p = axios.get(url, { params: data })
                break
            case 'POST':
                p = axios.post(url, data)
                break
            case 'PUT':
                p = axios.put(url, data)
                break
            case 'DELETE':
                p = axios.delete(url, { params: data })
                break
            default:
                p = new Promise((res, rej) => { })
        }
        p.then(response => {
            res(response)
        }).catch(e => {
            console.error('获取信息失败:' + e)
        })
    })
}