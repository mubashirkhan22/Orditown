import React from 'react'
import './Button.scss'

function Button({color}) {
  return (
    <>
      <div className='main_button_div'>
          <button className="button" style={{color:color}}>
            <span className="decorator top left" style={{borderTop:`1px solid ${color}` ,borderLeft:`1px solid ${color}`}}></span>
            <span className="decorator top right"style={{borderTop:`1px solid ${color}` ,borderRight:`1px solid ${color}`}}></span>
            <span className="decorator bottom left" style={{borderBottom:`1px solid ${color}` ,borderLeft:`1px solid ${color}`}}></span>
            <span className="decorator bottom right" style={{borderBottom:`1px solid ${color}` ,borderRight:`1px solid ${color}`}}></span>
            <span>Visit APPSTORE</span>
          </button>
        </div>
    </>
  )
}

export default Button
