import React from 'react'
import { useNavigate } from 'react-router-dom'
import loginUser from '../../../store/user/index'
import HistoryNavbar from './HistoryRouteNavbar'

const CommonHeader = React.memo((props: any) => {
  const navigate = useNavigate()
  const onClickLogout = () => {
    loginUser.dispatch('LOGOUT')
    navigate('/')
  }

  return (
    <>
      <div className = 'container-header'>
        <h1><span>My Portfolio</span></h1>
        { props?.userInfo?.role == 1 ?
          <div className= 'userinfo-box'>
            <div className='userid-label'>
              <span>userID: {props?.userInfo?.user_id}</span>
            </div>
            <button onClick={onClickLogout}>ログアウト</button>
          </div> : ''
        }
      </div>
      <HistoryNavbar histories={props.routeHistories} currentScreenId={props.currentScreenId} onClickLogout={onClickLogout}/>
    </>
  )
});

export default CommonHeader