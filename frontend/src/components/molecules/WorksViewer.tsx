import React,{ useEffect, useState } from 'react'
import { PAGINATIONTYPE } from '../../enum/TYPES'

import { getWorks } from '../../axios/worksAxios'
import Pagination from './commons/Pagination'

export const WorksViewer = React.memo((props:any) => {

  useEffect(() => {
    const getWorksInViewer = async() => {
      console.log('getWorks')
        const res = await getWorks()
        console.log(res.data)
        props.setWorks(res.data)
    }
    getWorksInViewer()
  },[])

  return (
    <>
        <div className='box-viewer__works'>
            <Pagination
              type={ PAGINATIONTYPE.WORKS }
              items={props.works}
              onClickWorks={props.onClickWorks}
            />
        </div>
    </>
  )
})

export default WorksViewer