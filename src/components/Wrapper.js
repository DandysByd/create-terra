import React, { useState } from 'react'
import './styles/wrapper.css'



const Wrapper = (props) => {

    const [isOpen,setIsOpen] = useState(false)

    return (
        <div className='wrapper-div'>
            <div className='holder' >
                <h2 onClick={props.click}>{props.header}</h2>
                {/* <div className='show-more' onClick={props.click}><i class="arrow down"></i></div> */}
                <div className={props.class}>
                {props.children}
                </div>
            </div>
        </div>
    )
}

export default Wrapper