import React, { useEffect, useState } from 'react'
import VolumeForm from './VolumeForm';
import './styles/changes.css'
import Species from './Species';

function Changes() {

    const [volume, setVolume] = useState(0)
    const [animal, setAnimal] = useState(null)

    const saveDimensions = (enterDimensionsData) =>{
        const dimensions = {
            ...enterDimensionsData
        }
        setVolume(enterDimensionsData.volume/1000000)
    }

    const saveAnimalType = (enteredAnimal) =>{
        setAnimal(enteredAnimal)
    }
    useEffect(()=>{
        console.log(animal)
    }, [animal])


    return (
        <>

         <h5>{animal},{volume} m³</h5>
         <Species onSaveSpecies={saveAnimalType}/>
         <VolumeForm  onSave={saveDimensions}/>
        </>
    )

}

export default Changes