import React,{ useState, useEffect } from "react"

import ReactPaginate from 'react-paginate'

import '../../../styles/pagination.scss'
import WorksList from "../../organisms/list/worksList"
import WorksDetailScreenList from "../../organisms/list/worksDetailScreenList"
import Pagenator from "../../molecules/commons/Pagenator"

import { PAGINATIONTYPE } from "../../../enum/TYPES"

const Pagination = React.memo((props:any) => {
    const { items } = props

    useEffect(() => {
        console.log('details open')
        setItemsOffset(0)
    },[items,props.isShowDetailModal])

    const itemsPerPage = props.type.perPage
    const [itemsOffset, setItemsOffset] = useState<number>(0)
    const endOffset = itemsOffset + itemsPerPage

    const currentItems = items.slice(itemsOffset, endOffset)

    const pageCount = Math.ceil(items.length / itemsPerPage)

    const handlePageClick = (typeString: string, selected: number = 0) => {
        let newOffset = 0
        if(typeString === 'pageClick') {
            newOffset = (selected * itemsPerPage) % items.length
        } else if(typeString === 'preClick') {
            newOffset = itemsOffset - itemsPerPage
        } else if(typeString === 'nextClick') {
            newOffset = itemsOffset + itemsPerPage
        }
        setItemsOffset(newOffset)
    }

    return (
        <>
            <div className="listWrapper">
                {
                    props.type.type === PAGINATIONTYPE.WORKS.type ?
                    <WorksList
                        works={currentItems}
                        onClickWorks={props.onClickWorks}
                    /> :
                    props.type.type === PAGINATIONTYPE.WORKSDETAIL.type ?
                    <WorksDetailScreenList
                        details={currentItems}
                        onClickDetails={props.onClickDetails}
                    /> : ''
                }
                <div className="paginateWrapper">
                    <Pagenator
                        pageCount={pageCount}
                        pageOffset={itemsOffset}
                        perPage={itemsPerPage}
                        itemLength={items.length}
                        onClickChange={handlePageClick}
                    />
                </div>
            </div>
        </>
    )
})

export default Pagination