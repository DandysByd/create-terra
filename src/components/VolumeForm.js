import React, { useEffect, useRef, useState } from 'react'
import './styles/dimensions.css'

function VolumeForm(props) {
    const width = useRef(50);
    const height = useRef(50);
    const depth = useRef(40);

    const [minWidth,setMinWidth] = useState('30')
    const [minHeight,setMinHeight] = useState('30')
    const [minDepth,setMinDepth] = useState('30')

    const getBounderies = () =>{
        switch (props.animal) {
            case 1:
                setMinWidth('100')
                setMinHeight('80')
                setMinDepth('40')
                break;
        
            default:
                setMinWidth('50')
                setMinHeight('50')
                setMinDepth('40')
                break;
        }
    }
    
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
    }, [width, height, depth,minDepth,minWidth,minHeight])


    return (
        <div className='dimensions-input' >
            <form onSubmit={submitHandler}>
                <div className='dimensions'>
                    <div className='input-fields'>
                        <label>Width</label>
                        <input  ref={width} min={minWidth} max='150' type='number' id='width-input'></input>
                    </div>
                    <div className='input-fields'>
                        <label>Height</label>
                        <input ref={height} min={minHeight} max='150' type='number' id='height-input'></input>
                    </div>
                    <div className='input-fields'>
                        <label>Depth</label>
                        <input ref={depth} min={minDepth} max='60' type='number' id='depth-input'></input>
                    </div>
                </div>
                <button onClick={getBounderies} className='values-button' type='submit'>Set size</button>
            </form>
        </div>
    )
}

export default VolumeForm
