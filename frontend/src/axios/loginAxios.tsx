import axios from 'axios'

import { LoginUserParams, LoginUserRes } from './types/user'

const loginPath = "http://localhost:3000/getLoginUser"

// Login機能は使用しない
export async function login(data:LoginUserParams):Promise<LoginUserRes> {
  return axios.post<LoginUserRes>(loginPath, data)
  .then((result) => result.data)
  .catch(() => {
    console.log('loginエラー')
    return {
      data: [],
      message: "",
      status: -1,
    }
  })
}