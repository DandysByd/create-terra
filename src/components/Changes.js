import React, { useEffect, useState } from 'react'
import VolumeForm from './VolumeForm';
import './styles/changes.css'
import Species from './Species';
import Materials from './Materials';
import Color from './Color'

function Changes() {

    const [volume, setVolume] = useState();
    const [animal, setAnimal] = useState();
    const [material, setMaterial] = useState();
    const [color, setColor] = useState();

    const saveDimensions = (enterDimensionsData) =>{
        const dimensions = {
            ...enterDimensionsData
        }
        setVolume(enterDimensionsData.volume/1000000)
    }

    const saveAnimalType = (enteredAnimal) =>{
        setAnimal(enteredAnimal)
    }

    const getSavedMaterial = (material) =>{

        switch (material) {
            case 1:
            setMaterial("Glass front, rest wood")    
                break;
            case 2:
            setMaterial("Glass only")
                break;
            case 3:
            setMaterial("Glass sides+front, rest wood")
                break;
                default:
                    setMaterial('')
                    break;
        }
        
    }

    const getSavedColor = (color) =>{
        switch (color) {
            case 1:
            setColor("gray")    
                break;
            case 2:
                setColor("orange") 
                break;
            case 3:
                setColor("yellow") 
                break;
                default:
                    setColor("") 
                    break;
        }
    }


    useEffect(()=>{
        console.log(animal, volume, material,color)
    }, [animal,volume,material,color])


    return (
        <>

         <h5 style={{color: color}}>,{material},{animal},{volume} m³</h5>
         <Species onSaveSpecies={saveAnimalType}/>
         <VolumeForm  onSave={saveDimensions}/>
         <Materials selectMaterial={getSavedMaterial} />
         <Color selectColor={getSavedColor}/>
        </>
    )

}

export default Changes