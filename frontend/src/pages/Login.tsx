import React,{ useState, useEffect, useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import { login } from '../axios/loginAxios'
import { useLocalStorage } from '../store'

import '../styles/login.scss'


export const Login = React.memo((props:any) => {
  const [userid, setUserid] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [emptyMsg, setEmptyMsg] = useState<Object>({user_id: '', password: ''})
  const [notFoundMsg, setNotFoundMsg] = useState<string>('')

  const [user, setUser] = useLocalStorage('user',null)

  const navigator = useNavigate()

  useEffect(() => {
    resetAllValue()
  },[props.isClose])

  const onInputUserid = (e:any) => {
    resetErrorValue()
    setUserid(e.target.value)
  }

  const onInputPassword = (e:any) => {
    resetErrorValue()
    setPassword(e.target.value)
  }

  const resetErrorValue = () => {
    setNotFoundMsg('')
    setEmptyMsg({ user_id: '', password: '' })
  }

  const resetAllValue = () => {
    setUserid('')
    setPassword('')
    setNotFoundMsg('')
    setEmptyMsg({ user_id: '', password: '' })
  }

  const isEmptyError = () => {
    let msgObj = { user_id: '', password: '' }
    if(userid === '') {
      msgObj.user_id = "'USERID' is required."
    }
    if(password === '') {
      msgObj.password = "'PASSWORD' is required."
    }
    setEmptyMsg(msgObj)
    return (msgObj.user_id !== '' || msgObj.password !== '')
  }

  const onClickLogin = async () => {
    if(isEmptyError()) {
      return
    }
    const res = await login({
      user_id: userid,
      password: password,
    })
    if(res.status === -1) {
      setNotFoundMsg(res.message)
    } else {
      setUser({
        id: res.data.id,
        user_id: res.data.user_id,
        role: res.data.role
      })
      props.closeModal()
      navigator('/')
    }
  }

  return (
    <>
      <div className='container-login'>
        <div className='title'>
          <span>Login</span>
        </div>
        <div className='errormsg-box'>
          { emptyMsg['user_id'] ? <span>{ emptyMsg['user_id'] }</span> : '' }
          { emptyMsg['password'] ? <span>{ emptyMsg['password'] }</span> : '' }
          { notFoundMsg ? <span>{ notFoundMsg }</span> : '' }
        </div>
        <div className='form'>
          <div className='group-input'>
            <div className='input'>
              <label htmlFor='userid'>USERID：</label>
              <input
                id='userid'
                type='text'
                onChange={ (e:any) => { onInputUserid(e) }}
                value={ userid }
                onKeyDown={ (e: any) => {
                  if(e.code === 'Enter') {
                    e.preventDefault()
                    onClickLogin()
                  }
                }}
              />
              <span></span>
            </div>
            <div className='input'>
              <label htmlFor='password'>PASSWORD：</label>
              <input
                id='password'
                type='password'
                onChange={ (e:any) => { onInputPassword(e) }}
                value={ password }
                onKeyDown={ (e: any) => {
                  if(e.code === 'Enter') {
                    e.preventDefault()
                    onClickLogin()
                  }
                }}
              />
              <span></span>
            </div>
          </div>
          <button
            className='btn'
            onClick={ onClickLogin }
          >
            Login
          </button>
        </div>
      </div>
    </>
  )
})