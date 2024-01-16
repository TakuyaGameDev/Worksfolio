import React,{ useState, useEffect } from 'react'
import '../../../styles/header.scss'

import { SELECTTYPE } from '../../../enum/TYPES'

export const Header = React.memo((props:any) => {
    const [fullfilled, setFullfilled] = useState<boolean>(false)
    const [searchUser, setSearchUser] = useState<string>('')

    const [searchAll, setSearchAll] = useState<boolean>(true)

    useEffect(() => {
        setFullfilled(searchUser.length > 0)
    },[searchUser])

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
                                setSearchUser(e.target.value)
                            }}
                            value={ searchUser }
                            />
                        <span></span>
                        <label htmlFor='creatorSearcher'>Search Creator</label>
                    </div>
                    <button
                        className={`search-user-btn ${ fullfilled ? 'active' : '' }`}
                        onClick={ () => {
                            
                            props.onClickSearchUser(searchUser)
                            setSearchAll(false)
                        }}
                    >Search</button>
                    <button
                        className={`search-user-btn__clear ${ searchAll ? 'disabled' : '' }`}
                        onClick={ () => {
                            setSearchUser('')
                            setSearchAll(true)
                            props.onClickSearchUser('')
                        }}
                    >Clear</button>
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