import React from 'react'
import '../../../styles/list/albumList.scss'

const albumList = React.memo((props: any) => {
    const { albums } = props

    console.log(albums)
    return (
        <div className='albumGritWrapper'>
            { albums.map((album: any) => (
                <div key={ album.id }>
                    <img src={album.url} alt="album" />
                </div>
            ))}
        </div>
    )
})

export default albumList