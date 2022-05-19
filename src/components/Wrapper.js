import React from 'react'
import './styles/wrapper.css'

const Wrapper = (props) => {
    return (
        <div className='wrapper-div'>
            <div className='holder' >
                <h2>{props.header}</h2>
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper