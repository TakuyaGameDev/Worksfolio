

function Button(props:any) {
    return (
        <>
            { props.disabled ? 
                <a className={ 'disabled' }>Button</a> :
                <a href={props?.url} className={ 'btn_26' } onClick={props.onClickFunc}>Button</a>
            }
        </>
    )
}
  
export default Button