import React,{ useState, useEffect, useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import '../styles/login.scss'


export const Login = React.memo((props:any) => {
  const [userid, setUserid] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    resetInputValue()
  },[props.isClose])

  const onInputUserid = (e:any) => {
    setUserid(e.target.value)
  }

  const onInputPassword = (e:any) => {
    setPassword(e.target.value)
  }

  const resetInputValue = () => {
    setUserid('')
    setPassword('')
  }

  return (
    <>
      <div className='container-login'>
        <div className='title'>
          <span>Login</span>
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
              />
              <span></span>
            </div>
          </div>
          <div className={`btn ${ (userid !== "" && password !== "") ? 'active' : 'non-active' }`}>
            Login
          </div>
        </div>
      </div>
    </>
  )
})