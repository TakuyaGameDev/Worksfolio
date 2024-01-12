import React,{ useEffect, useState } from 'react'

import { Works } from '../../type'
import { PAGINATIONTYPE } from '../../enum/TYPES'

import { getWorks, getWorksByUserId } from '../../axios/worksAxios'

import '../../styles/viewer.scss'
import Pagination from './commons/Pagination'

export const Viewer = React.memo((props:any) => {
  const [works, setWorks] = useState<Works[]>([])

  useEffect(() => {
    const getWorksInViewer = async() => {
      if(props.loginUser) {
        console.log('getWorksByUserId')
        console.log(props.loginUser.user_id)
        const res = await getWorksByUserId({ user_id: props.loginUser.user_id })
        console.log(res.data)
        setWorks(res.data)
      } else {
        console.log('getWorks')
        const res = await getWorks()
        console.log(res.data)
        setWorks(res.data)
      }
    }
    getWorksInViewer()
  },[props.loginUser])

  return (
    <>
        <div className='box-viewer'>
            <Pagination type={ PAGINATIONTYPE.WORKS } works={works} />
        </div>
    </>
  )
})

export default Viewer