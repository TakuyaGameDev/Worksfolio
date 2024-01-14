import React,{ useState, useEffect, useRef } from 'react'

import '../../styles/worksDetail.scss'

export const WorksDetail = React.memo((props:any) => {

    useEffect(() => {
        console.log('selectWorks')
        console.log(props.selectWorks)
    },[props.selectWorks])

    return (
        <>
            <div className='container-works-detail'>
                <div>{ props.selectWorks.title }</div>
                <div>{ props.selectWorks.user_id }</div>
            </div>
        </>
    )
})