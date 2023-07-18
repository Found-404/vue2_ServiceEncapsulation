import axios from "axios"
import { baseURL } from "../../config/baseUrl"

const service = axios.create()
service.defaults.baseURL = baseURL

service.interceptors.request.use(
    config => {
        // const token = getToken()
        // if (token) {
        //   config.headers["Authorization"] = `Bearer ${token}`
        // }
        if (config.text === true) {
            config.headers["Content-Type"] = "text/plain"
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    res => {
        // setRequestTimeToLocalStorage()
        const status = res.data.code || res.status
        if (status === 304007 || status === 304020 || status === 401) {
            //   removeToken()
            console.log('[ApiResponse][验证信息失效,请重新登录]', res.data)
            let timer = setTimeout(() => {
                clearTimeout(timer)
                location.href = '/login'
            }, 1000)
        }
        return res
    },
    error => {
        if (error.response.status === 401) {
            //   removeToken()
            console.log('[ApiResponse][验证信息失效,请重新登录]', error)
            let timer = setTimeout(() => {
                clearTimeout(timer)
                location.href = '/login'
            }, 1000)
        } else {
            return error
        }
    }
)

export default service
