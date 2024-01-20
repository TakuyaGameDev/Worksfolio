import axios from 'axios'

import { AboutMeRes } from './types/aboutme'

const getPath = "http://localhost:3000/getAboutme"

// Login機能は使用しない
export async function get():Promise<AboutMeRes> {
  return axios.post<AboutMeRes>(getPath)
  .then((result) => result.data)
  .catch(() => {
    console.log('getAboutme エラー')
    return {
      data: [],
      message: "",
      status: -1,
    }
  })
}