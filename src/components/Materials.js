import React, { useEffect, useState } from 'react'
import Button from './Button';
import './styles/materials.css'

const Materials = (props) => {

    const [selectedMaterial, setSelectedMaterial] = useState(0);
    
    const selectMaterial = (material) =>{
        setSelectedMaterial(material)
        props.selectMaterial(material)
    }
    useEffect(()=>{
    },[selectMaterial])
        
  return (
    <div className='materials-wrapper'>
        <Button func={()=>{selectMaterial(1)}} classDiv={selectedMaterial===1? 'selected-div' : 'deselected-div'} buttonText='OSB'></Button>
        <Button func={()=>{selectMaterial(2)}} classDiv={selectedMaterial===2? 'selected-div' : 'deselected-div'} buttonText='Black laminate'></Button>
        <Button func={()=>{selectMaterial(3)}} classDiv={selectedMaterial===3? 'selected-div' : 'deselected-div'} buttonText='White laminate'></Button>
    </div>
  )
}

export default Materials