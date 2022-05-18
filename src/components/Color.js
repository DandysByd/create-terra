import React, {useState, useEffect} from 'react'
import Button from './Button'
import './styles/colors.css'

const Color = (props) => {
    
    const [selected, setSelected] = useState(0);
    
    const selectColor = (color) =>{
        setSelected(color)
        props.selectColor(color)
    }
    useEffect(()=>{
    },[selected])

  return (

        <div className='color-wrapper'>
        <Button func={()=>{selectColor(1)}} classDiv={selected===1? 'selected-div' : 'deselected-div'} buttonText='Gray'></Button>
        <Button func={()=>{selectColor(2)}} classDiv={selected===2? 'selected-div' : 'deselected-div'} buttonText='Yellow'></Button>
        <Button func={()=>{selectColor(3)}} classDiv={selected===3? 'selected-div' : 'deselected-div'} buttonText='Orange'></Button>
    </div>
  )
}

export default Color