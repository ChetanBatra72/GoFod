import React from 'react'
import  ReactDOM  from 'react-dom'

const MODAL_STYLE={
    position:'fixed',
    top:'50%',
    left:'50%',
    backgroundColor: 'rgb(34,34,34)' ,
    transform:'translate(-50% , -50%)',
    zINdex :10000,
    height:'90%',
    width:'90%'
}
//below design is for background 
const OVERLAY_STYLES={
    position:'fixed',
    top:0,
    left:0,
    bottom:0,
    right:0,
    backgroundColor: 'rgba(0,0,0,0.7)' ,
    zINdex :10000,

}
export default function Modal({children,onclose}) {
  return ReactDOM.createPortal(
    <>
    <div style={OVERLAY_STYLES}/>
    <div style={MODAL_STYLE}>
    <button className='btn bg-danger fs-4' style={{margin:"90%",marginTop:"-35px"}}onClick={onclose}>X</button>
    {children}
    </div>
    {children}
    
    </> ,document.getElementById('card-root')
  )
}
