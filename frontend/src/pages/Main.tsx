import { useState, useEffect } from 'react'

import PageTranditioner from '../components/molecules/commons/TransitionPage'
import CommonHeader from '../components/molecules/commons/Header'

import Modal from '../components/molecules/commons/Modal'

import { SELECTTYPE, MODALTYPE } from '../enum/TYPES'
import '../styles/debug.scss'

function Main() {
  const [selectType, setSelectType] = useState<number>(SELECTTYPE.WORKS)
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false)

  const changeSelectType = (type: number) => {
    setSelectType(type)
  }

  const onClickLogin = () => {
    setIsOpenLoginModal(true)
  }

  const onClickCloseModal = () => {
    console.log('close')
    setIsOpenLoginModal(false)
  }

  return (
    <>
      <PageTranditioner />
      <CommonHeader selectType={ selectType } changeFunc={ changeSelectType } onClickLogin={ onClickLogin } />
      <Modal isOpen={isOpenLoginModal} onClickClose={ onClickCloseModal } type={ MODALTYPE.LOGIN }/>
      <div className='container-main debug__border'>
        MainContainer
      </div>
    </>
  )
}

export default Main