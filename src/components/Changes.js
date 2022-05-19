import React, { useEffect, useState } from 'react'
import VolumeForm from './VolumeForm';
import './styles/changes.css'
import Species from './Species';
import Materials from './Materials';
import Color from './Color'

function Changes() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [depth, setDepth] = useState(0);
    const [animal, setAnimal] = useState();
    const [material, setMaterial] = useState();
    const [color, setColor] = useState();
    

    const saveDimensions = (enterDimensionsData) =>{
        const dimensions = {
            ...enterDimensionsData
        }
       setWidth(enterDimensionsData.width)
       setHeight(enterDimensionsData.height)
       setDepth(enterDimensionsData.depth)
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
            setColor("rgb(63, 63, 63)")    
                break;
            case 2:
                setColor('rgb(187, 183, 123)') 
                break;
            case 3:
                setColor('rgb(255, 125, 65)') 
                break;
                default:
                    setColor("") 
                    break;
        }
    }


    useEffect(()=>{        
    }, [animal,width,height,depth,material,color])


    return (
        <>
         <h5 style={{color: color}}>{material},{animal},{width+ 'x' + height+ 'x' +depth}</h5>
         <Species onSaveSpecies={saveAnimalType}/>
         <VolumeForm  onSave={saveDimensions}/>
         <Materials selectMaterial={getSavedMaterial} />
         <Color selectColor={getSavedColor}/>
        </>
    )

}

export default Changes