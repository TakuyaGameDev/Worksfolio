import '../../../styles/header.scss'

function Header(props: any) {
  return (
    <>
        <div className='box-header'>
            <div className='btn-login'>
                Login
            </div>
            <div className='box-title'>
                <div className='title'>
                    MyPortfolio
                </div>
                <div className='sub-title'>
                    <a>Works</a>
                    <a>About me</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header