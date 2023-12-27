import { useState, useEffect, useRef } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import '../styles/login.scss'
import CommonHeader from '../components/molecules/commons/Header'
import Button from '../components/organisms/common/button'
import { LoginUserParams } from '../axios/types/user'
import loginUser from '../store/user/index'
import {login} from '../axios/loginAxios'

function Login() {
  const navigate = useNavigate()
  const passInputRef = useRef<HTMLInputElement>(null)
  const useridInputRef = useRef<HTMLInputElement>(null)
  // 入力ユーザーID
  const [userid,setUserid] = useState<string>('')
  // 入力パスワード
  const [password,setPassword] = useState<string>('')
  // 入力バリデーションメッセージ
  const [useridMsg, setUseridMsg] = useState<string>('')
  const [passwordMsg, setPasswordMsg] = useState<string>('')
  // ログイン失敗メッセージ
  const [loginFailedMessage, setLoginFailedMessage] = useState<string>('')
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true)

  const [isInputPass, setIsInputPass] = useState<boolean>(false)
  const [isInputUserid, setIsInputUserid] = useState<boolean>(false)

  // ログインボタンの活性非活性の決定
  useEffect(() => {
    if(userid == "" || password == "") {
      setBtnDisabled(true)
      return
    } else {
      if (useridMsg != "" || passwordMsg != "") {
        setBtnDisabled(true)
        return
      }
    }
    setBtnDisabled(false)
  },[userid,password])

  // ログインボタンが活性化したらエンター押下でのログインを受け付けるように修正
  useEffect(() => {
    window.document.onkeydown = function(event){
      if(!btnDisabled) {
        if (event.key === 'Enter') {
          onLogin()
        }
      }
    }
  },[btnDisabled])

  // ユーザIDとパスワードの入力欄の変更処理
  const onChangeInputText = (value:any) => {
    if (loginFailedMessage != '') {
      setLoginFailedMessage('')
    }
    let tmpIdName = value.id.substring(0, value.id.indexOf("-"))
    if(tmpIdName === 'pass') {
      if(value.value == '' && isInputPass){
        setPasswordMsg('PASSWORD：必須入力です')
      } else {
        if(value.value.length >= 21) {
          setPasswordMsg('PASSWORD：20文字以内で入力して下さい')
        } else {
          setPasswordMsg('')
        }
      }
      setIsInputPass(true)
      setPassword(value.value)
    }
    if(tmpIdName === 'userid') {
      if(value.value == '' && isInputUserid){
        setUseridMsg('USERID：必須入力です')
      } else {
        if(value.value.length >= 16) {
          setUseridMsg('USERID：15文字以内で入力して下さい')
        } else {
          setUseridMsg('')
        }
      }
      setIsInputUserid(true)
      setUserid(value.value)
    }
  }
  // ログイン処理(エンターを押したとき&ボタンをクリックしたときどちらも対応)
  const onLogin = async () => {
    if (!passInputRef.current || !useridInputRef.current) {
      return
    } 
    let pass = passInputRef.current.value;　// ⑤入力値取得
    let uid = useridInputRef.current.value;　// ⑤入力値取得
    const data:LoginUserParams = {
      user_id: uid,
      password: pass
    }

    const res = await login(data)
    if(res.status != -1) {
      // redux経由でstoreにログインユーザ情報を格納
      loginUser.dispatch('LOGIN', res.data)
      navigate('/main')
    } else {
      setLoginFailedMessage(res.message)
    }
  }

  return (
    <>
      <div className='header'>
        <CommonHeader />
      </div>
      <div className='container-login'>
        <div className='form'>
          <div className='title'>LOGIN</div>
          <div style={{ padding: '30px', width: 'fit-content', margin: '0 auto', display: 'flex', flexDirection: 'column', textAlign: loginFailedMessage != '' ? 'center' : 'right' }}>
            <span style={{ color:'white' }}>{passwordMsg}</span>
            <span style={{ color:'white' }}>{useridMsg}</span>
            <span style={{ color:'white' }}>{loginFailedMessage}</span>
          </div>
          <div className='form-body'>
            <div className='input'>
              <label htmlFor='pass-input'>password:</label>
              <input 
                id='pass-input' 
                type='password'
                onChange={(e) => onChangeInputText(e.target)}
                ref={passInputRef}></input>
            </div>
            <div className='input'>
              <label htmlFor='userid-input'>userID:</label>
              <input 
                id='userid-input' 
                type='text'
                onChange={(e) => onChangeInputText(e.target)}
                ref={useridInputRef}></input>
            </div>
            <div className='btn-login'>
              <Button
                disabled={btnDisabled}
                onClickFunc={onLogin}/>
            </div>
          </div>
          <div className='only-viewer-nav'>Click<Link to='/main'> HERE </Link>for view only</div>
        </div>
      </div>
    </>
  )
}

export default Login