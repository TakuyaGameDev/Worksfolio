import { useState, useEffect } from 'react'

function Pagenator(props: any) {

    useEffect(() => {
        console.log(props.pageOffset)
    },[props.pageOffset])
    const pages = () => {
        const items:any[] = []
        for (let i = 1; i < props.pageCount + 1; i++) {
            items.push(
                <div
                    className={`page-item ${props.pageOffset === (i - 1) * props.perPage ? 'active' : '' }`}
                    onClick={ () => props.onClickChange('pageClick', i - 1) }
                >{ i }</div>
            )
        }
        return items
    }
    return (
        <>
            <div className='paginateWrapper'>
                <div
                    className={`pre-page-btn ${props.pageOffset <= 0 ? 'disabled' : '' }`}
                    onClick={() => props.onClickChange('preClick') }
                >previous</div>
                {
                    pages()
                }
                <div
                    className={`next-page-btn ${props.pageOffset >= (((props.pageCount - 1) * props.perPage) % props.itemLength) ? 'disabled' : '' }`}
                    onClick={() => props.onClickChange('nextClick') }
                >next</div>
            </div>
        </>
    )
}

export default Pagenator