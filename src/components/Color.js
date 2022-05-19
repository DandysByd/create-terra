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
        <Button bgcolor='rgb(187, 183, 123)' func={()=>{selectColor(1)}} classDiv={selected===1? 'selected-div' : 'deselected-div'}></Button>
        <Button bgcolor='rgb(63, 63, 63)' func={()=>{selectColor(2)}} classDiv={selected===2? 'selected-div' : 'deselected-div'}></Button>
        <Button bgcolor='rgb(255, 125, 65)' func={()=>{selectColor(3)}} classDiv={selected===3? 'selected-div' : 'deselected-div'}></Button>
    </div>
  )
}

export default Color