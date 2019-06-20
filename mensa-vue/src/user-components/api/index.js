import axios from 'axios'

export default{
    fetchMenu (method, params, data){
        if(method === 'post'){
            return ajax('http://localhost:8000/menu/menu/', method, {data})
            // return ajax('api/notes/', 'get', null, null)
        }else{
            return ajax('http://localhost:8000/menu/menu/', 'get', {})
        }
    },
    fetchNotes (method, params, data){
        if(method === 'post'){
            return ajax('http://localhost:8000/notes/notes/', method, {data})
            // return ajax('api/notes/', 'get', null, null)
        }else{
            return ajax('http://localhost:8000/notes/notes/', 'get', {})
        }
    }
}

/**
 * @param url
 * @param method
 * @param params
 * @param data
 * @returns
 */

 function ajax(url, method, options){
    if(options !== undefined){
        var {params = {}, data = {}} = options
    }else{
        params = data = {}
    }
    return new Promise((resolve, reject) =>{
        axios({
            url,
            method,
            params,
            data
        }).then(res => {
            resolve(res)
        }, res => {
            reject(res)
        })
    })
 }