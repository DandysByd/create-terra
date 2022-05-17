import React, { useState } from 'react'
import ChangeForm from './ChangeForm';
import './styles/changes.css'

function Changes() {

    const [volume, setVolume] = useState(0)

    const saveDimensions = (enterDimensionsData) =>{
        const dimensions = {
            ...enterDimensionsData
        }
        setVolume(enterDimensionsData.volume/1000000)
     
    }
    console.log(volume)
    
    return (
        <>
         <h5>{volume} m³</h5>
         <ChangeForm  onSave={saveDimensions}/>
        </>
    )

}

export default Changes