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
                {
                    props.selectWorks.details.length > 0 ? 
                    <div className='screens-image-box'>
                    {
                        props.selectWorks.details.map((item: any) => (
                            <>
                                {
                                    item.url ? <img src={ item.url } /> : ''
                                }
                                
                            </>
                        ))
                    }
                    </div> : <div className='screens-image-box'></div>
                }
            </div>
        </>
    )
})