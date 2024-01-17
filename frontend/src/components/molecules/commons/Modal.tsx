import { useState, useEffect } from 'react'
import '../../../styles/modal.scss'

import { MODALTYPE } from '../../../enum/TYPES'

import { WorksDetail } from '../../organisms/worksDetail'

function Modal(props: any) {
    return (
        <>
            <a className={` overlay ${ props.isOpen ? 'active' : '' }`} onClick={ props.onClickClose }></a>
            <div className={` container-modal ${ props.isOpen ? 'active' : '' }`}>
                {
                    props.type === MODALTYPE.WORKSDETAIL && props.selectWorks ?
                    <WorksDetail
                        selectWorks={ props.selectWorks }
                        isClose={ !props.isOpen }
                        closeModal={ props.onClickClose }
                    /> : ''
                }
            </div>
        </>
    )
}

export default Modal