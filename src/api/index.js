import request from '@/utils/request.js'

export const UserRegisterAPI = (username, password, repassword) => request({
  url: '/api/reg',
  method: 'POST',
  data: {
    username,
    password,
    repassword
  }
})
