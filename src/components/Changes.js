import React, { useEffect, useState } from 'react'
import VolumeForm from './VolumeForm';
import './styles/changes.css'
import Species from './Species';
import Materials from './Materials';
import Color from './Color'
import Layout from './Layout';

function Changes() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [depth, setDepth] = useState(0);
    const [animal, setAnimal] = useState('[animal]');
    const [material, setMaterial] = useState('[material]');
    const [color, setColor] = useState(0);
    const [layout, setLayout] = useState('[layout]');
    const [showLayouts, setShowLayouts] = useState(true)


    const saveDimensions = (enterDimensionsData) => {
        const dimensions = {
            ...enterDimensionsData
        }
        setWidth(enterDimensionsData.width)
        setHeight(enterDimensionsData.height)
        setDepth(enterDimensionsData.depth)
    }

    const saveAnimalType = (enteredAnimal) => {
        setAnimal(enteredAnimal)
    }

    const getSavedLayout = (layout) => {

        switch (layout) {
            case 1:
                setLayout("Full glass")
                setShowLayouts(false)
                setMaterial(0)
                break;
            case 2:
                setLayout("Glass sides, rest wooden")
                setShowLayouts(true)
                break;
            case 3:
                setLayout("Front glass, rest wooden")
                setShowLayouts(true)
                break;
            default:
                setLayout('')
                break;
        }

    }


    const getSavedMaterial = (material) => {

        switch (material) {
            case 1:
                setMaterial("OSB")
                break;
            case 2:
                setMaterial("Black laminate")
                break;
            case 3:
                setMaterial("White laminate")
                break;
            default:
                setMaterial('')
                break;
        }

    }

    const getSavedColor = (color) => {
        switch (color) {
            case 1:
                setColor('rgb(187, 183, 123)')
                break;
            case 2:
                setColor("rgb(63, 63, 63)")
                break;
            case 3:
                setColor('rgb(255, 125, 65)')
                break;
            default:
                setColor("")
                break;
        }
    }


    useEffect(() => {
    }, [animal, width, layout, height, depth, material, color])


    return (
        <>
            <h5 style={{ color: color }}>{layout} - {material} - {animal} - {width + 'x' + height + 'x' + depth}</h5>
            <Species onSaveSpecies={saveAnimalType} />
            <VolumeForm onSave={saveDimensions} />
            <Layout selectedLayout={getSavedLayout} />
            {showLayouts ? <Materials selectMaterial={getSavedMaterial} /> : <div></div>}
            <Color selectColor={getSavedColor} />
        </>
    )

}

export default Changes