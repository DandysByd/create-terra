import React, {useState, useEffect} from 'react'
import Button from './Button';
import './styles/materials.css'

const Layout = (props) => {
    const [selectedLayout, setSelectedLayout] = useState(0);
    
    const selectLayout = (layout) =>{
        setSelectedLayout(layout)
        props.selectedLayout(layout)
    }
    useEffect(()=>{
    },[selectLayout])
        
  return (
    <div className='materials-wrapper'>
        <Button func={()=>{selectLayout(1)}} classDiv={selectedLayout===1? 'selected-div' : 'deselected-div'} buttonText='Full glass'></Button>
        <Button func={()=>{selectLayout(2)}} classDiv={selectedLayout===2? 'selected-div' : 'deselected-div'} buttonText='Glass sides, rest wooden'></Button>
        <Button func={()=>{selectLayout(3)}} classDiv={selectedLayout===3? 'selected-div' : 'deselected-div'} buttonText='Front glass, rest wooden'></Button>
    </div>
  )
}

export default Layout