import React,{ useState, useEffect } from "react"

import ReactPaginate from 'react-paginate'

import '../../../styles/pagination.scss'
import AlbumList from "../../organisms/list/worksList"

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

    const handlePageClick = (e: { selected: number }) => {
        const newOffset = (e.selected * itemsPerPage) % works.length
        setItemsOffset(newOffset)
    }

    return (
        <>
            <div className="worksWrapper">
                <AlbumList works={currentWorks} onClickWorks={props.onClickWorks} />
                <div className="paginateWrapper">
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
            </div>
        </>
    )
})

export default Pagination