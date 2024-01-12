import React,{ useState } from 'react'
import '../../../styles/header.scss'

import { SELECTTYPE } from '../../../enum/TYPES'

export const Header = React.memo((props:any) => {
    const [fullfilled, setFullfilled] = useState<boolean>(false)
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
                    <div className='search-user-box'>
                        <input
                            className={ fullfilled ? 'fullfilled' : '' }
                            id="creatorSearcher"
                            onChange={ (e: any) => {
                                setFullfilled(e.target.value.length > 0)
                            }}/>
                        <span></span>
                        <label htmlFor='creatorSearcher'>Search Creator</label>
                    </div>
                    <button className={`search-user-btn ${ fullfilled ? 'active' : '' }`}>Search</button>
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