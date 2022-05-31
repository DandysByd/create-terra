import React, { useState } from 'react'
import './styles/wrapper.css'

const OpenCloseLayoutItems = (props) => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div onClick={()=>setIsOpen(!isOpen)} className={isOpen ? 'items-container-open' : 'items-container'} >
        <h4 className='header' >{props.header}</h4>
        <div className={isOpen ? 'show-text' : 'hide-text'}>
            {props.children}
        </div>
    </div>
  )
}

export default OpenCloseLayoutItems