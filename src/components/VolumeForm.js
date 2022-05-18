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

    const submitHandler = (e) => {
        e.preventDefault();

    }

    useEffect(() => {
    }, [width, height, depth])

    const onChangeHandler = () => {


        const dimensions = {
            width: width,
            height: height,
            depth: depth,
            volume: width*height*depth
        }
        props.onSave(dimensions);

    }

    return (
        <div className='dimensions-input' >
            <form onSubmit={submitHandler} onChange={onChangeHandler}>
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
                {/* <button type='submit'>Send</button> */}
            </form>
        </div>
    )
}

export default VolumeForm
