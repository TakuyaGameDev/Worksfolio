import { useState, useEffect } from 'react'

import CommonMenubar from '../components/molecules/commons/Menubar'
import PageTransitioner from '../components/molecules/commons/TransitionPage'
import '../styles/main.scss'
import '../styles/viewport.scss'
import {TRANSITION_CONDITION_TYPE,
        PAGE_TYPE,
        VIEW_TYPE,
        VIEWING_ITEMS,
       } from '../enums/TYPES'
import FirstlyView from '../components/molecules/viewports/Firstly'
import CareerView from '../components/molecules/viewports/Career'
import WorksView from '../components/molecules/viewports/Works'
import loginUser from '../store/user/index'
import CommonHeader from '../components/molecules/commons/Header'

function Main() {
  const [viewType, setViewType] = useState<boolean>(VIEW_TYPE.AUTOMATIC)
  const [viewingItem, setViewingItem] = useState<number>(VIEWING_ITEMS.FIRSTLY)
  const transitionType = TRANSITION_CONDITION_TYPE.WELCOME
  useEffect(()=>{
    // ログインユーザの変数確認用LOG
    console.log(loginUser.getState())
  },[])

  useEffect(() => {
    console.log(viewingItem)
    if(viewType == VIEW_TYPE.AUTOMATIC){
      let timeoutId = setTimeout(() => {
        let tmpItem = viewingItem < VIEWING_ITEMS.WORKS ? viewingItem + 1 : VIEWING_ITEMS.FIRSTLY
        setViewingItem(tmpItem)
      }, 10 * 1000)
      // こういう処理を書く
     return () => {
       clearTimeout(timeoutId)
     }
    }
  }, [viewingItem, viewType])

  const changeViewType = () => {
    setViewType(!viewType)
  }
  return (
    <>
    <div><PageTransitioner type={transitionType}/></div>
    <div className='header'>
      <CommonHeader userInfo={loginUser.getState().userInfo}/>
    </div>
    <div className='container-main'>
      <div className='menubarGr'>
        <div className='menubar'>
          <CommonMenubar pageType={PAGE_TYPE.MAIN} viewType={viewType} viewingItem={viewingItem} setViewingItem={setViewingItem} />
        </div>
        <button 
          className='change-viewing-type-button'
          onClick={ () => {
              changeViewType()
              //setViewingItem(VIEWING_ITEMS.FIRSTLY)
            } 
          }
        >
          { viewType ? 'automatic viewing' : 'manual viewing' }
        </button>
      </div>
      <div className='viewport'>
        { viewingItem == VIEWING_ITEMS.FIRSTLY ? <FirstlyView /> :
          viewingItem == VIEWING_ITEMS.CAREER ? <CareerView /> : 
          viewingItem == VIEWING_ITEMS.WORKS ? <WorksView /> : ''
        }
      </div>
    </div>
    </>
  )
}

export default Main