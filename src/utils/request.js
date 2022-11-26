import axios from 'axios'

const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net',
  timeout: 3000
})

// const request = (url, method, headers = {}, params = {}, data = {}) => myAxios({
//   url,
//   method,
//   headers,
//   params,
//   data
// })
// export default (url, method, headers = {}, params = {}, data = {}) => myAxios({
//   url,
//   method,
//   headers,
//   params,
//   data
// })
export default myAxios
