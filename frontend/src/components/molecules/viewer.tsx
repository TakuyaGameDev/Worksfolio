import React,{ useEffect, useState } from 'react'

import { Album } from '../../type'

import '../../styles/viewer.scss'
import Pagination from './commons/Pagination'

export const Viewer = React.memo((props:any) => {
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    const getAlbums = async() => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((albums) => setAlbums(albums))
    }
    getAlbums()
  },[])


  return (
    <>
        <div className='box-viewer'>
            <Pagination albums={albums} />
        </div>
    </>
  )
})

export default Viewer