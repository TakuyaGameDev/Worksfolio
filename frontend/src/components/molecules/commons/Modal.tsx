import { useState } from 'react'
import '../../../styles/modal.scss'

import { MODALTYPE } from '../../../enum/TYPES'

import { Login } from '../../../pages/Login'

function Modal(props: any) {
    return (
        <>
            <a className={` overlay ${ props.isOpen ? 'active' : '' }`} onClick={ props.onClickClose }></a>
            <div className={` container-modal ${ props.isOpen ? 'active' : '' }`}>
                {
                    props.type === MODALTYPE.LOGIN ? <Login isClose={ !props.isOpen } /> : ''
                }
            </div>
        </>
    )
}

export default Modal