
import '../../../styles/page-transition.scss'
import {TRANSITION_CONDITION_TYPE} from '../../../enums/TYPES'

import loginUser from '../../../store/user/index'

function TransitionPage(props: any) {
  return (
    <>
        { props.type == TRANSITION_CONDITION_TYPE.WELCOME ?
          <div className="bg">
            <p className="text">
                <span>W</span>
                <span>e</span>
                <span>l</span>
                <span>c</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
                <span>!</span>
            </p>
            <div className='accountNameBox'>
              { loginUser.getState().userInfo.user_id ? loginUser.getState().userInfo.user_id : 'Guest' }
            </div>
          </div> : ''
        }
    </>
  )
}

export default TransitionPage