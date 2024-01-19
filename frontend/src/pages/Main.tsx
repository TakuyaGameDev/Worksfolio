import { useState, useEffect } from 'react'

import { Works } from '../type'
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
  const [selectWorks, setSelectWorks] = useState<Works>()
  const user = getLocalStorageValue('user')

  const changeSelectType = (type: number) => {
    setSelectType(type)
  }

  const onClickWorks = (worksId: number) => {
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
      <CommonHeader
        selectType={ selectType } 
        changeFunc={ changeSelectType }
      />
      <div className='container-main'>
        {
          selectType === SELECTTYPE.WORKS ?
          <div className='works-box'>
            <WorksViewer
              setWorks={ setWorks }
              works={ works }
              onClickWorks={ onClickWorks }
            />
          </div> : 
          selectType === SELECTTYPE.ABOUTME ?
          <div className='aboutme-box'>
            <AboutMeViewer />
          </div> : ''
        }
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