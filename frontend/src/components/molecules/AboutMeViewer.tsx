import React,{ useEffect, useState } from 'react'
import { PAGINATIONTYPE } from '../../enum/TYPES'

export const AboutMeViewer = React.memo((props:any) => {

  useEffect(() => {
  },[])

  return (
    <>
        <div className='box-viewer__aboutme'>
            <div className='title'>
              About me.
            </div>
            <div className='contents'>
              
            </div>
        </div>
    </>
  )
})

export default AboutMeViewer