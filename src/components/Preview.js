import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import ComponentImage from './ComponentImage';
import './styles/preview.css'

function Preview(props) {

  var width = 50;
  var height = 50;
  var borderLeft, borderRight, borderTop, borderBottom, color
  
  
  switch (props.material) {
    case 'OSB':
      color = '12px solid rgb(88, 78, 44)'
      break;
    case 'Black laminate':
      color = '12px solid rgb(16,15,15)'
      break;
    case 'White laminate':
      color = '12px solid white'
      break;
      default:
        color = ''
      break;
    }
    
    if (props.layout === "Front glass, rest wooden") {
      borderLeft = borderRight = borderTop = borderBottom = color
  } else if (props.layout === 'Glass sides, rest wooden') {
    borderLeft = borderRight = '12px solid gray'
    borderTop = borderBottom = color
  } else {
    borderLeft = borderRight = borderTop = borderBottom = '12px solid gray'
  }
  

  if (width / height > 4) {
    height = Math.floor(height / 5)
    width = Math.floor(width / 6)
  } else if (width <= 50 && height <= 50) {
    height = Math.floor(height / 4)
    width = Math.floor(width / 4)
  } else if (width >= height) {
    height = Math.floor(height / 5)
    width = Math.floor(width / 5)
  } else {
    height = Math.floor(height / 6)
    width = Math.floor(width / 5)
  }

  let proportions = width / height
  
  
  const equipment = {
    
    'Python / Snake': [
      {
        id: 1,
        name: 'Cork tunnel',
        img: require('../componentsImages/cork-tunnel.png')
      },
      {
        id: 2,
        name: 'Spider wood',
        img: require('../componentsImages/spider-wood.png')
      },

    ],
    'Tortoise': [
      {
        id: 1,
        name: ''
        
      }
    ],
    'Chinese water dragon': [
      {
        id: 1,
        name: ''
        
      }
    ],
    'Bearded dragon': [
      {
        id: 1,
        name: ''
        
      }
    ],
    'Creseted gecko': [
      {
        id: 1,
        name: ''
        
      }
    ],
    'Chameleon': [
      {
        id: 1,
        name: ''
        
      }
    ],
  }
  
  var [box, setBox] = useState([])
  const [{ isOver }, drop] = useDrop(() => ({

  
    accept: 'image',
    drop: (item) => addImageToBox(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addImageToBox = (id) => {
    const pictureList = equipment[props.animal].filter((x)=> id === x.id)
    setBox((box)=>[...box,pictureList[0]])
  }
  
  
  return (
    <section className={proportions >= 2 ? 'container-rectangle' : 'container-square'}>
      <div ref={drop} style={{ borderTop: borderTop, borderLeft: borderLeft, borderRight: borderRight, borderBottom: borderBottom, backgroundColor: props.backgroundColor, aspectRatio: width / height }} className='table-holder' >
        {box.map((x) => {
          return (
            <img className='single-component' src={x.img} />
            )
          })}
      </div>


      <div>
        <h6>Terarium equipment for {props.animal}</h6>
        {equipment[props.animal].map((x, i) => {
          return (
            <ComponentImage id={x.id} url={x.img} name={x.name} alt={x.name} />
          )
        })}
      </div>
    </section>
  )
}

export default Preview