import React,{ useState } from 'react'
import '../../../styles/list/worksList.scss'

const albumList = React.memo((props: any) => {
    const { works } = props
    return (
        <div className='worksGritWrapper'>
            {
                works.length === 0 ?
                <div>
                    只今制作中なので少々お待ちください。
                </div>
                :
                works.map((item: any) => (
                    <>
                        <div key={ item.id } className='wrapper-item'>
                            <div className='title'>{ item.title }</div>
                            <div className='creatorName'>作成者：【{ item.user_id }】</div>
                            <figure className='box-img'>
                                <img
                                    src={item.image_url}
                                    onClick={ () => { props.onClickWorks(item.id) } }
                                    alt="works" />
                                <figcaption
                                    className='show-nav-text'
                                    onClick={ props.onClickWorks }
                                >
                                    Show Detail.
                                </figcaption>
                            </figure>
                            <div className='dev-periods'>
                                開発期間
                                <div className='from'>
                                    <span>開発開始日：</span>{ item.dev_periods.from }
                                </div>
                                <div className='to'>
                                    <span>開発終了日：</span>{ item.dev_periods.to }
                                </div>
                            </div>
                            <div className='box-description'>
                                説明：
                                {
                                    Object.keys(item.descriptions).length  !== 0 ?
                                    <span>{ item.descriptions.main }</span>
                                    : ''
                                }
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
})

export default albumList