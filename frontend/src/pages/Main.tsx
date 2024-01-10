import { useState, useEffect } from 'react'

import PageTranditioner from '../components/molecules/commons/TransitionPage'
import CommonHeader from '../components/molecules/commons/Header'
import AdminViewer from '../components/molecules/admin/viewer'
import GuestViewer from '../components/molecules/viewer'

import Modal from '../components/molecules/commons/Modal'
import { getLocalStorageValue, resetLocalStorage } from '../store'
import { useNavigate } from 'react-router-dom'
import { SELECTTYPE, MODALTYPE } from '../enum/TYPES'
import '../styles/debug.scss'
import '../styles/main.scss'

function Main() {
  const [selectType, setSelectType] = useState<number>(SELECTTYPE.WORKS)
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false)
  const user = getLocalStorageValue('user')

  const navigator = useNavigate()

  const changeSelectType = (type: number) => {
    setSelectType(type)
  }

  const onClickLogin = () => {
    setIsOpenLoginModal(true)
  }

  const onClickLogout = () => {
    resetLocalStorage('user')
    navigator('/')
  }

  const onClickCloseModal = () => {
    setIsOpenLoginModal(false)
  }

  return (
    <>
      <PageTranditioner loginUser={ user } />
      <CommonHeader selectType={ selectType } changeFunc={ changeSelectType } onClickLogin={ onClickLogin } onClickLogout={ onClickLogout } loginUser={ user } />
      <Modal isOpen={isOpenLoginModal} onClickClose={ onClickCloseModal } type={ MODALTYPE.LOGIN }/>
      <div className='container-main'>
        { user ? <AdminViewer /> : <GuestViewer /> }
      </div>
    </>
  )
}

export default Main