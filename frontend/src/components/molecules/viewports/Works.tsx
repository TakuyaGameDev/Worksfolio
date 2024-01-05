
import img1 from '../../../assets/スライド1.png'
import img2 from '../../../assets/スライド2.png'
import img3 from '../../../assets/スライド3.png'
import img4 from '../../../assets/スライド4.png'

function Works() {
  return (
    <>
      <div className='backScreen'>
      【WORKS】Now Preparing...
        <div className="slide-container">
          <div className="slide-wrapper">
            <img className="slide" src={ img1 } />
            <img className="slide" src={ img2 } />
            <img className="slide" src={ img3 } />
            <img className="slide" src={ img4 } />
          </div>
          <div className="slide-wrapper">
            <img className="slide" src={ img1 } />
            <img className="slide" src={ img2 } />
            <img className="slide" src={ img3 } />
            <img className="slide" src={ img4 } />
          </div>
          <div className="slide-wrapper">
            <img className="slide" src={ img1 } />
            <img className="slide" src={ img2 } />
            <img className="slide" src={ img3 } />
            <img className="slide" src={ img4 } />
          </div>
        </div>
        <button>
          詳細はこちら→
        </button>
      </div>
    </>
  )
}

export default Works