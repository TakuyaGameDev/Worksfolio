import React,{ useEffect, useState } from 'react'
import '../../styles/aboutmeDetail.scss'

export const AboutMeDetail = React.memo((props:any) => {

  useEffect(() => {
    console.log(props.items?.career)
  },[props.items])

  return (
    <>
        <div className='detail-box'>
            <div className='left-pane'>
                Career<span className="dli-chevron-down"></span>
                <div className='contents'>
                    {
                        props.items?.career?.map((item: any) => (
                            <>
                                <div className='date'>{item.date}</div>
                                <div className='content' style={{ whiteSpace:'pre-wrap' }}>{item.content}</div>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className='right-pane'>
                Skills & Certificates<span className="dli-chevron-down"></span>
                <div className='contents'>
                    {
                        props.items?.skills['languages']?.map((item: any) => (
                            <div className='item'>{item}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
})

export default AboutMeDetail