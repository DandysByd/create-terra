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
          <div>
              
        <Button bgcolor='rgb(187, 183, 123)' func={()=>{selectColor(1)}} classDiv={selected===1? 'selected-div' : 'deselected-div'}></Button>
        <Button bgcolor='rgb(63, 63, 63)' func={()=>{selectColor(2)}} classDiv={selected===2? 'selected-div' : 'deselected-div'}></Button>
        <Button bgcolor='rgb(255, 125, 65)' func={()=>{selectColor(3)}} classDiv={selected===3? 'selected-div' : 'deselected-div'}></Button>
        <Button bgcolor='rgb(48, 36, 16)' func={()=>{selectColor(4)}} classDiv={selected===4? 'selected-div' : 'deselected-div'}></Button>
        <Button bgcolor='rgb(49, 83, 54)' func={()=>{selectColor(5)}} classDiv={selected===5? 'selected-div' : 'deselected-div'}></Button>
        </div>
        <div>
        <Button  bgimage={"url(" + require('../backgroundImages/coco.jpg') + ")"} func={()=>{selectColor(6)}} classDiv={selected===6? 'selected-div' : 'deselected-div'}></Button>
        <Button  bgimage={"url(" + require('../backgroundImages/stone.jpg') + ")"} func={()=>{selectColor(7)}} classDiv={selected===7? 'selected-div' : 'deselected-div'}></Button>
        <Button  bgimage={"url(" + require('../backgroundImages/cork.jpg') + ")"} func={()=>{selectColor(8)}} classDiv={selected===8? 'selected-div' : 'deselected-div'}></Button>
        <Button  bgimage={"url(" + require('../backgroundImages/sand.jpg') + ")"} func={()=>{selectColor(9)}} classDiv={selected===9? 'selected-div' : 'deselected-div'}></Button>
        </div>
    </div>
  )
}

export default Color