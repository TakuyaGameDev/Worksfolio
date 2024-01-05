
import { PAGE_TYPE, VIEW_TYPE, VIEWING_ITEMS } from '../../../enums/TYPES'

function CommonMenubar(props: any) {
  return (
    <>
      { PAGE_TYPE[props?.screenName].id == PAGE_TYPE.MAIN.id ?
        <div className='container-menubar'>
          <div className='buttonGr'>
              <a className={`
                ${(props.viewType == VIEW_TYPE.AUTOMATIC) ? 'auto' : ''}
                ${(props.viewingItem == VIEWING_ITEMS.FIRSTLY) ? 'checked' : '' }`}
                onClick={() => props.setViewingItem(VIEWING_ITEMS.FIRSTLY)}>Firstly
              </a>
              <a className={`
                ${(props.viewType == VIEW_TYPE.AUTOMATIC) ? 'auto' : ''}
                ${(props.viewingItem == VIEWING_ITEMS.CAREER) ? 'checked' : '' }`}
                onClick={() => props.setViewingItem(VIEWING_ITEMS.CAREER)}>Career
              </a>
              <a className={`
                ${(props.viewType == VIEW_TYPE.AUTOMATIC) ? 'auto' : ''}
                ${(props.viewingItem == VIEWING_ITEMS.WORKS) ? 'checked' : '' }`}
                onClick={() => props.setViewingItem(VIEWING_ITEMS.WORKS)}>Works
              </a>
          </div>
        </div> : ''
      }
    </>
  )
}

export default CommonMenubar