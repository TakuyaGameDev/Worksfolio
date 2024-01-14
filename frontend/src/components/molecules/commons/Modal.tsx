import { useState, useEffect } from 'react'
import '../../../styles/modal.scss'

import { MODALTYPE } from '../../../enum/TYPES'

import { Login } from '../../../pages/Login'
import { WorksDetail } from '../../organisms/worksDetail'

function Modal(props: any) {
    return (
        <>
            <a className={` overlay ${ props.isOpen ? 'active' : '' }`} onClick={ props.onClickClose }></a>
            <div className={` container-modal ${ props.isOpen ? 'active' : '' }`}>
                {
                    props.type === MODALTYPE.LOGIN ?
                    <Login
                        isClose={ !props.isOpen }
                        closeModal={ props.onClickClose }
                    />
                    :
                    props.type === MODALTYPE.WORKSDETAIL ?
                    <WorksDetail
                        selectWorks={ props.selectWorks }
                        isClose={ !props.isOpen }
                        closeModal={ props.onClickClose }
                    />
                    : ''
                }
            </div>
        </>
    )
}

export default Modal