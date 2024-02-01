import React,{ useEffect, useState } from 'react'
import AboutMeDetail from '../organisms/aboutmeDetail'

import { get } from '../../axios/aboutmeAxios'

export const AboutMeViewer = React.memo((props:any) => {

  useEffect(() => {
    const getAboutmeInViewer = async() => {
      console.log('getWorks')
        const res = await get()
        console.log(res.data[0])
        props.setAboutMe(res.data[0])
    }
    getAboutmeInViewer()
  },[])

  return (
    <>
        <div className='box-viewer__aboutme'>
            <div className='title'>
              About me.
            </div>
            <div className='contents'>
              {
                props.info ? 
                <AboutMeDetail
                  items={props.info}
                /> : ''
              }
            </div>
        </div>
    </>
  )
})

export default AboutMeViewer