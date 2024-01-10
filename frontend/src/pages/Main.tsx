import { useState, useEffect } from 'react'

import PageTranditioner from '../components/molecules/commons/TransitionPage'
import CommonHeader from '../components/molecules/commons/Header'
import '../styles/debug.scss'

function Main() {
  return (
    <>
      <PageTranditioner />
      <CommonHeader />
      <div className='container-main debug__border'>
        MainContainer
      </div>
    </>
  )
}

export default Main