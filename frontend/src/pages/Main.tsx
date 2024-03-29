import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'


import { Works, AboutMe } from '../type'
import PageTranditioner from '../components/molecules/commons/TransitionPage'
import CommonHeader from '../components/molecules/commons/Header'
import WorksViewer from '../components/molecules/WorksViewer'
import AboutMeViewer from '../components/molecules/AboutMeViewer'

import Modal from '../components/molecules/commons/Modal'
import { getLocalStorageValue, resetLocalStorage } from '../store'
import { useNavigate } from 'react-router-dom'
import { SELECTTYPE, MODALTYPE } from '../enum/TYPES'
import '../styles/debug.scss'
import '../styles/main.scss'
import '../styles/viewer.scss'

function Main() {
  const [selectType, setSelectType] = useState<number>(SELECTTYPE.WORKS)
  const [isOpenWorksDetailModal, setIsOpenWorksDetailModal] = useState<boolean>(false)

  const [works, setWorks] = useState<Works[]>([])
  const [aboutmeInfo, setAboutmeInfo] = useState<AboutMe>()
  const [selectWorks, setSelectWorks] = useState<Works>()
  const user = getLocalStorageValue('user')

  const worksBoxRef = useRef<HTMLDivElement>(null)
  const aboutmeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    selectType === SELECTTYPE.WORKS ?
    scrollToWorks() : 
    selectType === SELECTTYPE.ABOUTME ? 
    scrollToAboutMe() : ''
  },[selectType])

  useEffect(() => {
    let bodyElem = document.getElementById("rootBody")
    !isOpenWorksDetailModal ? bodyElem?.setAttribute('class','allow-scroll') : bodyElem?.setAttribute('class','no-scroll')
  },[isOpenWorksDetailModal])

  const scrollToWorks = () => {
    worksBoxRef!.current!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const scrollToAboutMe = () => {
    aboutmeRef!.current!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const changeSelectType = (type: number) => {
    setSelectType(type)
  }

  const onClickWorks = (worksId: number) => {
    scrollToWorks()
    const result = works.filter( works => works.id === worksId)
    setSelectWorks(result[0])
    setIsOpenWorksDetailModal(true)
  }

  const onClickCloseWorksDetailModal = () => {
    setIsOpenWorksDetailModal(false)
  }

  return (
    <>
      <PageTranditioner loginUser={ user } />
      <div
        className='header'
        ref={ worksBoxRef }
      >
        <CommonHeader
          selectType={ selectType } 
          changeFunc={ changeSelectType }
        />
      </div>
      <div className='container-main'>
        <div className='works-box'>
          <WorksViewer
            setWorks={ setWorks }
            works={ works }
            onClickWorks={ onClickWorks }
          />
        </div>
        <div ref={aboutmeRef}></div>
        <div className='aboutme-box'>
          <AboutMeViewer 
            setAboutMe={setAboutmeInfo}
            info={aboutmeInfo}
          />
        </div> 
        <Modal
          selectWorks={ selectWorks }
          isOpen={isOpenWorksDetailModal}
          onClickClose={ onClickCloseWorksDetailModal }
          type={ MODALTYPE.WORKSDETAIL }
        />
      </div>
    </>
  )
}

export default Main