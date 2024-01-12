import axios from 'axios'

import { GetWorksParams, GetWorksRes } from './types/works'

const getWorksPath = "http://localhost:3000/getWorks"
const getWorksByUserIdPath = "http://localhost:3000/getWorksByUserId"

export async function getWorks():Promise<GetWorksRes> {
  return axios.post<GetWorksRes>(getWorksPath)
  .then((result) => result.data)
  .catch(() => {
    console.log('getWorks エラー')
    return {
      data: {},
      message: "",
      status: -1,
    }
  })
}

export async function getWorksByUserId(data:GetWorksParams):Promise<GetWorksRes> {
  return axios.post<GetWorksRes>(getWorksByUserIdPath, data)
  .then((result) => result.data)
  .catch(() => {
    console.log('getWorksByUserId エラー')
    return {
      data: {},
      message: "",
      status: -1,
    }
  })
}