import React, { useState } from 'react'
import VolumeForm from './VolumeForm';
import './styles/changes.css'

function Changes() {

    const [volume, setVolume] = useState(0)

    const saveDimensions = (enterDimensionsData) =>{
        const dimensions = {
            ...enterDimensionsData
        }
        setVolume(enterDimensionsData.volume/1000000)
     
    }
    return (
        <>
        
         <h5>{volume} m³</h5>
         <VolumeForm  onSave={saveDimensions}/>
        </>
    )

}

export default Changes