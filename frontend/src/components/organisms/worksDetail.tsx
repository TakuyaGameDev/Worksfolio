import React,{ useState, useEffect, useRef } from 'react'

import '../../styles/worksDetail.scss'

type Details = {
    screen_url: string
    descriptions: string[]
}

export const WorksDetail = React.memo((props:any) => {

    const [selectedDetail, setSelectedDetail] = useState<Details>({
        screen_url: props.selectWorks.details[0].url,
        descriptions: props.selectWorks.descriptions[1]
    })
    const onClickScreen = (selected: number) => {
        const tmpDetail = {
            screen_url: props.selectWorks.details.filter((detail: any) => detail.screen_id === selected)[0].url,
            descriptions: props.selectWorks.descriptions[selected]
        }
        console.log(tmpDetail)
        setSelectedDetail(tmpDetail)
    }

    const resetDetail = () => {
        const tmpDetail = {
            screen_url: props.selectWorks.details[0].url,
            descriptions: props.selectWorks.descriptions[1]
        }
        setSelectedDetail(tmpDetail)
    }

    useEffect(() => {
        resetDetail()
    },[props.selectWorks])

    return (
        <>
            <div className='container-works-detail'>
                <div className='left-pane'>
                    <div className='title'>
                        タイトル：<span>{props.selectWorks.title}</span>
                    </div>
                    <div className='dev-periods'>
                        開発期間：<span>{props.selectWorks.dev_periods['from']} ~ {props.selectWorks.dev_periods['to']}</span>
                    </div>
                    <div className='descriptions'>
                        実装内容：
                        {
                            selectedDetail.descriptions.map((description: any) => (
                                <div className='des-item'>
                                    ■ { description }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='right-pane'>
                {
                    props.selectWorks.details.length > 0 ? 
                    <div className='screens-image-box'>
                    {
                        props.selectWorks.details.map((item: any) => (
                            <>
                                {
                                    item.url ?
                                    <img
                                        src={ item.url }
                                        onClick={ () => { onClickScreen(item.screen_id) } }/> : ''
                                }
                            </>
                        ))
                    }
                    </div> : ''
                }
                <div className='pagination-test'>
                    Pagination実装予定箇所
                </div>
                <div className='selected-screen-box'>
                    <img
                        src={ selectedDetail.screen_url }></img>
                </div>
                </div>
        </div>
        </>
    )
})