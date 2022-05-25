import React, { useEffect, useState } from 'react'
import VolumeForm from './VolumeForm';
import './styles/changes.css'
import Species from './Species';
import Materials from './Materials';
import Color from './Color'
import Layout from './Layout';
import Wrapper from './Wrapper';
import Preview from './Preview';

function Changes() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [depth, setDepth] = useState(0);
    const [animal, setAnimal] = useState(null);
    const [material, setMaterial] = useState(null);
    const [color, setColor] = useState(null);
    const [layout, setLayout] = useState(null);
    const [showLayouts, setShowLayouts] = useState(true)



    const [openAnimal, setOpenAnimal] = useState(true)
    const [openDimensions, setOpenDimensions] = useState(false)
    const [openLayout, setOpenLayout] = useState(false)
    const [openMaterial, setOpenMaterial] = useState(false)
    const [openColor, setOpenColor] = useState(false)



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
        setWidth(0)
        setHeight(0)
        setDepth(0)
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
            case 4:
                setColor('rgb(48, 36, 16)')
                break;
            default:
                setColor("")
                break;
        }
    }


    // useEffect(() => {
    // }, [animal, width, layout, height, depth, material, color])


    const handleOpen = (j, k) => {
        j(k => !k)
    }

    return (
        <>
            <h5 style={{ color: color }}>{layout} - {material} - {animal} - {width + 'x' + height + 'x' + depth}</h5>
            <Wrapper sel={'-clickable'} click={() => handleOpen(setOpenAnimal, openAnimal)} class={openAnimal ? 'section-open' : 'section-closed'} header='Terrarium is going to be for ...'>
                <Species onSaveSpecies={saveAnimalType} />
            </Wrapper>
            <Wrapper sel={animal!=null ? '-clickable' : ''} click={() => handleOpen(setOpenDimensions, openDimensions)} class={animal!=null || openDimensions ? 'section-open' : 'section-closed'} header='Choose dimensions for your terrarium'>
                <VolumeForm animal={animal} onSave={saveDimensions} /> 
            </Wrapper>
            <Wrapper sel={width&&height&&depth!=null ? '-clickable' : ''} click={() => handleOpen(setOpenLayout, openLayout)} class={width&&height&&depth!=null || openLayout ? 'section-open' : 'section-closed'} header='Front, top, bottom and sides layout'>
                <Layout selectedLayout={getSavedLayout} />
            </Wrapper>
            {showLayouts && <Wrapper sel={layout!=null ? '-clickable' : ''} click={() => handleOpen(setOpenMaterial, openMaterial)} class={layout!=null || openMaterial ? 'section-open' : 'section-closed'} header='Material which will be used for creating'> <Materials selectMaterial={getSavedMaterial} /></Wrapper>}
            <Wrapper sel={material!=null ? '-clickable' : ''} click={() => handleOpen(setOpenColor, openColor)} class={material!=null || openColor ? 'section-open' : 'section-closed'} header='Choose color of plastic background'>
                <Color selectColor={getSavedColor} />
            </Wrapper>
            <Preview material={material} layout={layout} backgroundColor={color} />
        </>
    )

}

export default Changes