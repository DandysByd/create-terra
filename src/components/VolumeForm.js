import React, { useEffect, useState } from 'react'
import './styles/dimensions.css'

function VolumeForm(props) {
    //Dimensions state
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [depth, setDepth] = useState(0);


    //Dimensions setters
    function getValueWidth(e) {
        setWidth(e.target.value);
    }
    function getValueHeight(e) {
        setHeight(e.target.value);
    }
    function getValueDepth(e) {
        setDepth(e.target.value);
    }
    
    
    const dimensions = {
        width:width,
        height:height,
        depth:depth
    };
    const submitHandler = (e) => {
        e.preventDefault();
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
                        <input onChange={getValueWidth} type='number' id='width-input'></input>
                    </div>
                    <div className='input-fields'>
                        <label>Height</label>
                        <input onChange={getValueHeight} type='number' id='height-input'></input>
                    </div>
                    <div className='input-fields'>
                        <label>Depth</label>
                        <input onChange={getValueDepth} type='number' id='depth-input'></input>
                    </div>
                </div>
                <button className='values-button' type='submit'>Set size</button>
            </form>
        </div>
    )
}

export default VolumeForm
