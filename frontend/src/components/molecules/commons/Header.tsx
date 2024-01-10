import React from 'react'
import '../../../styles/header.scss'

import { SELECTTYPE } from '../../../enum/TYPES'

export const Header = React.memo((props:any) => {
  return (
    <>
        <div className='box-header'>
            <div className='btn-login'>
                { props.loginUser ? 
                    <a onClick={ props.onClickLogout }>Logout</a> :
                    <a onClick={ props.onClickLogin }>Login</a>
                }
            </div>
            <div className='box-title'>
                <div className='title'>
                    MyPortfolio
                </div>
                <div className='sub-title'>
                    <a onClick={ () => { props.changeFunc(SELECTTYPE.WORKS) } } className={ props.selectType == SELECTTYPE.WORKS ? 'select' : '' }>Works</a>
                    <a onClick={ () => { props.changeFunc(SELECTTYPE.ABOUTME) } } className={ props.selectType == SELECTTYPE.ABOUTME ? 'select' : '' }>About me</a>
                </div>
            </div>
        </div>
    </>
  )
})

export default Header