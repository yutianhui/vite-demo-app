/**
 * axios 请求插件实例
 */
import axios from 'axios'

// 请求实例
const instance = axios.create({
  //   baseURL: 'https://api.publicapis.org',
  timeout: 10 * 1000,
  headers: {
    'content-type': 'application/json',
    accpet: 'application/json',
  },
})

export default instance
