import React from 'react'
import { useDrag } from 'react-dnd'
import './styles/preview.css'


const ComponentImage = (props) => {
    const [{isDragging},drag] = useDrag(()=>({
        type: 'image',
        item: {id: props.id},
        collect: (monitor)=>({
            isDragging: !!monitor.isDragging(),
        })
    }))
  return (
    <div className='single-component-div'>
            <img className='component-image' ref={drag} src={props.url} alt={props.alt} style={{border: isDragging && '1px solid black'}}></img>
    </div>
  )
}

export default ComponentImage