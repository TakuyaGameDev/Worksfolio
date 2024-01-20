import React,{ useState } from 'react'
import '../../../styles/list/worksDetailList.scss'

const worksDetailScreenList = React.memo((props: any) => {
    const { details } = props
    return (
        <div className='detailsGritWrapper'>
            {
                details.length === 0 ?
                <div>
                    只今制作中なので少々お待ちください。
                </div>
                :
                details.map((item: any) => (
                    <>
                        <div key={ item.screen_id } className='wrapper-item'>
                            <figure className='box-img'>
                                {
                                    item.url !== "" ?
                                    <img
                                        src={item.url}
                                        onClick={ () => { props.onClickDetails(item.screen_id) } }
                                        alt="details"
                                    /> : ''
                                }
                            </figure>
                        </div>
                    </>
                ))
            }
        </div>
    )
})

export default worksDetailScreenList