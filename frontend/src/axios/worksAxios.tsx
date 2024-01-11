import axios from 'axios'

import { GetWorksParams, GetWorksRes } from './types/works'

const getWorksPath = "http://localhost:3000/getWorksByUserId"

export async function getWorksByUserId(data:GetWorksParams):Promise<GetWorksRes> {
  return axios.post<GetWorksRes>(getWorksPath, data)
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