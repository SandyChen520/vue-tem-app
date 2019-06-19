import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: window.VUE_APP_API_URL + window.VUE_APP_BASE_API,
  timeout: 60 * 1000
})

// request 拦截器
service.interceptors.request.use(
  config => {
    config.data = config.data || config.params || {}
    config.method = config.type || config.method || 'GET'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const { code, message, status } = response.data
    if (code === 'SUCCESS') {
      return response.data
    }
    if (status === 302) { // 没有token
      location.href = response.data.location
      return
    }
    if (status === 401) { // token过期
      window.location.reload()
      return
    }
    return Promise.reject(new Error(message))
  },

  error => {
    return Promise.reject(error)
  }
)

export default service
