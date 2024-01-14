import React,{ useEffect, useState } from 'react'
import { PAGINATIONTYPE } from '../../enum/TYPES'

import { getWorks, getWorksByUserId } from '../../axios/worksAxios'

import '../../styles/viewer.scss'
import Pagination from './commons/Pagination'

export const Viewer = React.memo((props:any) => {

  useEffect(() => {
    const getWorksInViewer = async() => {
      if(props.loginUser) {
        console.log('getWorksByUserId')
        const res = await getWorksByUserId({ user_id: props.loginUser.user_id })
        console.log(res.data)
        props.setWorks(res.data)
      } else {
        console.log('getWorks')
        const res = await getWorks()
        console.log(res.data)
        props.setWorks(res.data)
      }
    }
    getWorksInViewer()
  },[props.loginUser])

  useEffect(() => {
    const searchWorks = async() => {
      if(props.searchUserId === '') {
        const res = await getWorks()
        props.setWorks(res.data)
      } else {
        const res = await getWorksByUserId({ user_id: props.searchUserId })
        props.setWorks(res.data)
      }
    }
    searchWorks()
  },[props.searchUserId])

  return (
    <>
        <div className='box-viewer'>
            <Pagination
              type={ PAGINATIONTYPE.WORKS }
              works={props.works}
              onClickWorks={props.onClickWorks}
            />
        </div>
    </>
  )
})

export default Viewer