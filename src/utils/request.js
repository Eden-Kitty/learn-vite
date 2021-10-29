import axios from 'axios'
// import { Message } from 'element-ui'
// import { loading } from '@/components/index.js'
import { to } from '@/utils/'
/**
 * 创建 axios 实例
 */
const service = axios.create({
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
service.interceptors.request.use(
  (config) => {
    const {
      method = 'POST',
      showLoading = true,
      data = {},
      isDiagnosis = false
    } = config
    // 没有特殊配置，则自动显示加载中loading
    if (showLoading) {
      // 放个统一的loading
    //   loading(true)
    }
    config.data = method === 'post' ? data : ''
    config.params = method === 'get' ? data : ''
    // 是否诊疗路劲接口
    if (isDiagnosis) {
      config.headers.apiToken = localStorage.getItem('apiToken')
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response) => {
    const { codeHandle = {}} = response.config
    const res = response.data
    // loading(false)
    if (res.error) {
      return Promise.reject(res)
    }
    const code = res.code
    const isSuccess = code === 0 || code === '0' || code === '000000'

    if (isSuccess) {
      return Promise.resolve(res.data || res.result)
    } else if (codeHandle === 'skip') { // 允许所有异常code通过
      return Promise.reject(res)
    } else if (codeHandle === 'silent') { // 所有状态码静默
      console.error(`[request] 已配置所有异常静默 ${code}: ${res.message}`)
      return Promise.reject(res)
    } else if (code === '1008') {
      alert(res.message || res.data.message || '网络超时,请重新登录')
    //   toLogout()
    } else {
      alert(res.message || res.data.message || '网络异常')
      return Promise.reject(res)
    }
  },
  (error) => {
    // loading(false)
    // Message.error('网络异常')
    return Promise.reject(error)
  }
)
/** aa
 * @params url(请求接口地址)
 * @params data(请求参数)
 * @params ops(请求附加参数)
 */
export const postAsync = (url, options = {}) => {
  options.method = 'POST'
  options.url = url
  return to(service(options))
}

/** aa
 * @params url(请求接口地址)
 * @params data(请求参数)
 * @params ops(请求附加参数)
 */
export const getAsync = (url, options = {}) => {
  options.method = 'GET'
  options.url = url
  return to(service(options))
}

/**
 * @params url(请求接口地址)
 * @params data(请求参数)
 * @params ops(请求附加参数)
 */
export const rawGet = (url, options = {}) => {
  options.method = 'GET'
  options.url = url
  return service(options)
}

/**
 * @params url(请求接口地址)
 * @params data(请求参数)
 * @params ops(请求附加参数)
 */

export const rawPost = (url, options = {}) => {
  options.method = 'POST'
  options.url = url
  return service(options)
}
export default {
  install(_Vue) {
    _Vue.prototype.$postAsync = postAsync
    _Vue.prototype.$getAsync = getAsync
    _Vue.prototype.$getRawFetch = rawGet
    _Vue.prototype.$postRawFetch = rawPost
  }
}
