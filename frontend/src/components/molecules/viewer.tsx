import React,{ useEffect, useState } from 'react'

import { Works } from '../../type'
import { PAGINATIONTYPE } from '../../enum/TYPES'

import { getWorksByUserId } from '../../axios/worksAxios'

import '../../styles/viewer.scss'
import Pagination from './commons/Pagination'

export const Viewer = React.memo((props:any) => {
  const [albums, setAlbums] = useState<Works[]>([])

  useEffect(() => {
    const getAlbums = async() => {
      const res = await getWorksByUserId({ user_id: null })
      setAlbums(res.data)
    }
    getAlbums()
  },[])

  return (
    <>
        <div className='box-viewer'>
            <Pagination type={ PAGINATIONTYPE.WORKS } albums={albums} />
        </div>
    </>
  )
})

export default Viewer