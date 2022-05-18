import React, { useEffect, useState } from 'react'
import Button from './Button';
import './styles/materials.css'

const Materials = (props) => {

    const [selected, setSelected] = useState(0);
    
    const selectMaterial = (material) =>{
        setSelected(material)
        props.selectMaterial(material)
    }
    useEffect(()=>{
    },[selected])
        
  return (
    <div className='materials-wrapper'>
        <Button func={()=>{selectMaterial(1)}} classDiv={selected===1? 'selected-div' : 'deselected-div'} buttonText='Glass front, rest wood'></Button>
        <Button func={()=>{selectMaterial(2)}} classDiv={selected===2? 'selected-div' : 'deselected-div'} buttonText='Glass only'></Button>
        <Button func={()=>{selectMaterial(3)}} classDiv={selected===3? 'selected-div' : 'deselected-div'} buttonText='Glass sides+front, rest wood'></Button>
    </div>
  )
}

export default Materials