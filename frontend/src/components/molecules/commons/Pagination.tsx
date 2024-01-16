import React,{ useState, useEffect } from "react"

import ReactPaginate from 'react-paginate'

import '../../../styles/pagination.scss'
import AlbumList from "../../organisms/list/worksList"
import Pagenator from "../../molecules/commons/Pagenator"

const Pagination = React.memo((props:any) => {
    const { works } = props

    useEffect(() => {
        setItemsOffset(0)
    },[works])

    const itemsPerPage = 3
    const [itemsOffset, setItemsOffset] = useState<number>(0)
    const endOffset = itemsOffset + itemsPerPage

    const currentWorks = works.slice(itemsOffset, endOffset)

    const pageCount = Math.ceil(works.length / itemsPerPage)

    const handlePageClick = (typeString: string, selected: number = 0) => {
        let newOffset = 0
        if(typeString === 'pageClick') {
            newOffset = (selected * itemsPerPage) % works.length
        } else if(typeString === 'preClick') {
            newOffset = itemsOffset - itemsPerPage
        } else if(typeString === 'nextClick') {
            newOffset = itemsOffset + itemsPerPage
        }
        setItemsOffset(newOffset)
    }

    return (
        <>
            <div className="worksWrapper">
                <AlbumList works={currentWorks} onClickWorks={props.onClickWorks} />
                <div className="paginateWrapper">
                    <Pagenator
                        pageCount={pageCount}
                        pageOffset={itemsOffset}
                        perPage={itemsPerPage}
                        itemLength={works.length}
                        onClickChange={handlePageClick}
                    />
                </div>
            </div>
        </>
    )
})

export default Pagination