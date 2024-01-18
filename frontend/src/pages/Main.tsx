import { useState, useEffect } from 'react'

import { Works } from '../type'
import PageTranditioner from '../components/molecules/commons/TransitionPage'
import CommonHeader from '../components/molecules/commons/Header'
import Viewer from '../components/molecules/viewer'

import Modal from '../components/molecules/commons/Modal'
import { getLocalStorageValue, resetLocalStorage } from '../store'
import { useNavigate } from 'react-router-dom'
import { SELECTTYPE, MODALTYPE } from '../enum/TYPES'
import '../styles/debug.scss'
import '../styles/main.scss'

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
        <Viewer
          setWorks={ setWorks }
          works={ works }
          onClickWorks={ onClickWorks }
        />
        {
          <Modal
            selectWorks={ selectWorks }
            isOpen={isOpenWorksDetailModal}
            onClickClose={ onClickCloseWorksDetailModal }
            type={ MODALTYPE.WORKSDETAIL }
          />
        }
      </div>
    </>
  )
}

export default Main