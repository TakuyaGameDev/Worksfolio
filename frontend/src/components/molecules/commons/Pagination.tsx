import React,{ useState } from "react"

import ReactPaginate from 'react-paginate'

import '../../../styles/pagination.scss'
import AlbumList from "../../organisms/list/albumList"

const Pagination = React.memo((props:any) => {
    const { albums } = props

    const itemsPerPage = 6
    const [itemsOffset, setItemsOffset] = useState<number>(0)
    const endOffset = itemsOffset + itemsPerPage

    const currentAlbums = albums.slice(itemsOffset, endOffset)

    const pageCount = Math.ceil(albums.length / itemsPerPage)

    const handlePageClick = (e: { selected: number }) => {
        // console.log(e.selected)
        const newOffset = (e.selected * itemsPerPage) % albums.length
        setItemsOffset(newOffset)
    }

    return (
        <>
            <div className="albumWrapper">
                <AlbumList albums={currentAlbums} />
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
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </>
    )
})

export default Pagination