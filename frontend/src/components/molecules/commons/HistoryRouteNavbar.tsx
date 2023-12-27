import React,{ useEffect } from 'react'
import loginUser from '../../../store/user/index'

const HistoryRouteNavbar = React.memo((props: any) => {
  useEffect(() => {
    console.log(props.histories)
  },[])
  
  const historyRoutes = () => {
    const pathNames = []
    props.histories.forEach(path => {
        if(props.currentScreenId === path.id) {
            pathNames.push(<span href={path.path}>{ path.id + '：'　+ path.name }</span>)
        } else {
            if(path.id === 1){
                pathNames.push(<a href={path.path} onClick={props.onClickLogout}>{ path.id + '：'　+ path.name }</a>)
            } else {
                pathNames.push(<a href={path.path}>{ path.id + '：'　+ path.name }</a>)
            }
        }
    })
    return pathNames
  }

  return (
    <>
      <div className = 'history-nav-box'>
        { 
            historyRoutes()
        }
      </div>
    </>
  )
});

export default HistoryRouteNavbar