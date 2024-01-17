import React,{ useState } from 'react'
import '../../../styles/list/worksList.scss'

const worksList = React.memo((props: any) => {
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
                        </div>
                    </>
                ))
            }
        </div>
    )
})

export default worksList