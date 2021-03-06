import React, { useEffect, useRef, useState } from 'react'
import './styles/dimensions.css'

function VolumeForm(props) {
    const width = useRef(50);
    const height = useRef(50);
    const depth = useRef(40);

   
    
    const submitHandler = (e) => {
        e.preventDefault();
        const dimensions = {
            width:width.current.value,
            height:height.current.value,
            depth:depth.current.value
        };
        props.onSave(dimensions);
    }

    useEffect(() => {
    }, [width, height, depth])


    return (
        <div className='dimensions-input' >
            <form onSubmit={submitHandler}>
                <div className='dimensions'>
                    <div className='input-fields'>
                        <label>Width</label>
                        <input  ref={width} min='30' max='150' type='number' id='width-input'></input>
                    </div>
                    <div className='input-fields'>
                        <label>Height</label>
                        <input ref={height} min='30' max='150' type='number' id='height-input'></input>
                    </div>
                    <div className='input-fields'>
                        <label>Depth</label>
                        <input ref={depth} min='40' max='60' type='number' id='depth-input'></input>
                    </div>
                </div>
                <button className='values-button' type='submit'>Set size</button>
            </form>
        </div>
    )
}

export default VolumeForm
