import React,{ useState, useEffect, useRef } from 'react'

import Pagination from '../molecules/commons/Pagination'

import '../../styles/worksDetail.scss'
import { PAGINATIONTYPE } from '../../enum/TYPES'

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
        setSelectedDetail(tmpDetail)
    }

    const resetDetail = () => {
        const tmpDetail = {
            screen_url: props.selectWorks.details[0].url,
            descriptions: props.selectWorks.descriptions[1]
        }
        setSelectedDetail(tmpDetail)
    }

    const ennvironment = () => {
        const items:any[] = []
        props.selectWorks?.dev_environment?.forEach((item: string) => {
            items.push(
                <div className='item-env'>・ { item }</div>
            )
        })
        return items
    }

    useEffect(() => {
        resetDetail()
    },[props.selectWorks,props.isClose])

    return (
        <>
            <div className='container-works-detail'>
                <div className='left-pane'>
                    <div className='title'>
                        <div className='label'>タイトル</div>
                        <span>{props.selectWorks.title}</span>
                    </div>
                    <div className='dev-periods'>
                        <div className='label'>開発期間</div>
                        <span>{props.selectWorks.dev_periods['from']} ~ {props.selectWorks.dev_periods['to']}</span>
                    </div>
                    <div className='dev-environment'>
                        <div className='label'>使用言語など</div>
                        {
                            ennvironment()
                        }
                    </div>
                    <div className='descriptions'>
                        <div className='label'>各画面での実装詳細</div>
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
                    <div className='screens-image-box'>
                        <Pagination
                            type={ PAGINATIONTYPE.WORKSDETAIL }
                            items={props.selectWorks.details}
                            onClickDetails={onClickScreen}
                            isShowDetailModal={props.isClose}
                        />
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