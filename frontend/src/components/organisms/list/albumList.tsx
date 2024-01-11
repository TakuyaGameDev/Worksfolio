import React from 'react'
import '../../../styles/list/albumList.scss'

const albumList = React.memo((props: any) => {
    const { albums } = props

    console.log(albums)
    return (
        <div className='albumGritWrapper'>
            { albums.map((album: any) => (
                <>
                    <div key={ album.id } className='wrapper-item'>
                        <div className='title'>{ album.title }</div>
                        <img src={album.image_url[0]} alt="album" />
                        <div className='dev-periods'>
                            開発期間
                            <div className='from'>
                                <span>開発開始日：</span>{ album.dev_periods.from }
                            </div>
                            <div className='to'>
                                <span>開発終了日：</span>{ album.dev_periods.to }
                            </div>
                        </div>
                        <div className='box-description'>
                            説明：
                            {
                                Object.keys(album.descriptions).length  !== 0 ?
                                <span>{ album.descriptions.main }</span>
                                : ''
                            }
                        </div>
                    </div>
                </>
            ))}
            {
                albums.length === 0 ?
                <div>
                    只今制作中なので少々お待ちください。
                </div>
                : ''
            }
        </div>
    )
})

export default albumList