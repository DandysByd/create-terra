import html2canvas from 'html2canvas';
import { Resizable } from 're-resizable';
import React, { useEffect, useRef, useState } from 'react'
import { useDrop } from 'react-dnd';
import Draggable from 'react-draggable';
import { Rnd } from 'react-rnd';
import Button from './Button';
import ComponentImage from './ComponentImage';
import OpenCloseLayoutItems from './OpenCloseLayoutItems';
import './styles/preview.css'
import Wrapper from './Wrapper';

function Preview(props) {

  var width = props.width;
  var height = props.height;
  var borderLeft, borderRight, borderTop, borderBottom, color
  const [index,setIndex] = useState(1)
  const indexRef=(null)
  const [isOpen,setIsOpen] = useState(false)

  var originalWidth = width*10
  var originalHeight = height*10

  var oriW=width
  var oriH=height

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
    borderLeft = borderRight = '24px solid gray'
    borderTop = borderBottom = color
  } else {
    borderLeft = borderRight = borderTop = borderBottom = '12px solid gray'
  }


  if (width / height > 4) {
    height = Math.floor(height / 5)
    width = Math.floor(width / 6)
  } else if (height/width >=3) {
    height = Math.floor(height / 6)
    width = Math.floor(width / 5)
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

  const universalList = [
    {
      id: 1,
      name: 'Cork tunnel',
      img: require('../componentsImages/cork-tunnel.png'),
    },
    {
      id: 2,
      name: 'Cork tunnel',
      img: require('../componentsImages/cork-tunnel-1.png'),
    },
    {
      id: 3,
      name: 'Spider wood',
      img: require('../componentsImages/spider-wood.png'),
    },
    {
      id: 4,
      name: 'Spider wood ',
      img: require('../componentsImages/spider-wood-1.png'),
    },
    {
      id: 5,
      name: 'Spider wood ',
      img: require('../componentsImages/spider-wood-2.png'),
    },
    {
      id: 3,
      name: 'Spider wood',
      img: require('../componentsImages/spider-wood.png'),
    },
    {
      id: 4,
      name: 'Spider wood ',
      img: require('../componentsImages/spider-wood-1.png'),
    },
    {
      id: 5,
      name: 'Spider wood ',
      img: require('../componentsImages/spider-wood-2.png'),
    },
    {
      id: 6,
      name: 'Stone ',
      img: require('../componentsImages/stone-1.png'),
    },
    {
      id: 7,
      name: 'Stone ',
      img: require('../componentsImages/stone-2.png'),
    },
    {
      id: 8,
      name: 'Stone ',
      img: require('../componentsImages/stone-3.png'),
    },
  ]

  const universal = {
    'Cork tunnels':[{
      id: 1,
      name: 'Cork tunnel',
      img: require('../componentsImages/cork-tunnel.png'),
    },
    {
      id: 2,
      name: 'Cork tunnel',
      img: require('../componentsImages/cork-tunnel-1.png'),
    },
  ],
  'Wood':[
    {
      id: 3,
      name: 'Spider wood',
      img: require('../componentsImages/spider-wood.png'),
    },
    {
      id: 4,
      name: 'Spider wood ',
      img: require('../componentsImages/spider-wood-1.png'),
    },
    {
      id: 5,
      name: 'Spider wood ',
      img: require('../componentsImages/spider-wood-2.png'),
    },
  ],
  'Stone':[
    {
      id: 6,
      name: 'Stone ',
      img: require('../componentsImages/stone-1.png'),
    },
    {
      id: 7,
      name: 'Stone ',
      img: require('../componentsImages/stone-2.png'),
    },
    {
      id: 8,
      name: 'Stone ',
      img: require('../componentsImages/stone-3.png'),
    },
  ],
  'Background' :[
    {}
  ]
  }

  const equipment = {

    'Python / Snake': [
      {
        id: 9,
        name: 'Hide',
        img: require('../componentsImages/snake-hide.png'),
      },

    ],
    'Tortoise': [
      {
        id: 10,
        name: 'Cork tunnel',
        img: require('../componentsImages/cork-tunnel.png'),
      },
      {
        id: 11,
        name: 'Spider wood',
        img: require('../componentsImages/spider-wood.png'),
      },
    ],
    'Chinese water dragon': [
      {
        id: 12,
        name: 'Cork tunnel',
        img: require('../componentsImages/cork-tunnel.png'),
      },
      {
        id: 13,
        name: 'Spider wood',
        img: require('../componentsImages/spider-wood.png'),
      },
    ],
    'Bearded dragon': [
      {
        id: 14,
        name: 'Aloe vera',
        img: require('../componentsImages/aloe-vera.png'),
      },
      {
        id: 15,
        name: 'Spider wood',
        img: require('../componentsImages/spider-wood.png'),
      },
      {
        id: 25,
        name: 'Wooden ladder',
        img: require('../componentsImages/wooden-ladder.png'),
      },
    ],
    'Creseted gecko': [
      {
        id: 16,
        name: 'Cork tunnel',
        img: require('../componentsImages/cork-tunnel.png'),
      },
      {
        id: 17,
        name: 'Spider wood',
        img: require('../componentsImages/spider-wood.png'),
      },
    ],
    'Chameleon': [
      {
        id: 18,
        name: 'Umbrella plant',
        img: require('../componentsImages/umbrella-plant.png')
      },
      {
        id: 19,
        name: 'Spider wood',
        img: require('../componentsImages/spider-wood.png')
      },
    ],
  }


  var [box, setBox] = useState([])
  const [{ isOver }, drop] = useDrop(() => ({


    accept: 'image',
    drop: (item) => addImageToBox(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }
  ))

  const addImageToBox = (id) => {
    let list = equipment[props.animal]
    let  pictureList = list.filter((x) => x.id === id)

   
     pictureList[0] === undefined ?  pictureList = universalList.filter((x)=> id===x.id) : pictureList = pictureList
    const finalList = { ... pictureList[0], randomKey: Math.random() }

    // console.log(pictureList)
    setBox((box) => [...box, finalList])
  }

  useEffect(() => {
    console.log(box)
  }, [box]);

  const removeItem = (key) => {
    const pictureList = box.filter((x) => key !== x.randomKey)
    setBox(pictureList)
  }

  const reset = () => {
    setBox([])
  }

  function screenshot() {
    html2canvas(document.getElementById('idk')).then(function (finalPreview) {

      const image= finalPreview.toDataURL('image/png')
      document.body.appendChild('<img src="'+image+'"/>');
    })
  }


  return (
    <section className={proportions >= 2 ? 'container-rectangle' : 'container-square'}>
        
      <div  ref={drop}    style={{borderTop: borderTop, borderLeft: borderLeft, borderRight: borderRight, borderBottom: borderBottom, opacity:0.7, aspectRatio: width / height }} id='idk' className='table-holder' >
       <div style={{background: props.backgroundColor}} className='table-holder-k'>
        {box.map((x) => {
          return (
            
            <Draggable>
            <Resizable
            maxWidth={originalWidth}
            maxHeight={originalHeight}
            defaultSize={{
              width: 100,
              height: 100,
            }} >
              
                  <img onDoubleClick={() => removeItem(x.randomKey)} alt={x.name} className='single-component' src={x.img} />
            </Resizable>
              </Draggable>
              
          )
        })}
        </div>
      </div>

      <div>
        <Button func={reset} classDiv='reset-button' buttonText='Reset layout'> </Button>
        <Button func={screenshot} classDiv='reset-button' buttonText='Finished'> </Button>
          <OpenCloseLayoutItems header='Cork tunnels'>
        {universal['Cork tunnels'].map(x=>{
          return(
            <ComponentImage id={x.id} url={x.img} alt={x.name} />
            )
          })}
        </OpenCloseLayoutItems>
        <OpenCloseLayoutItems header='Wood'>
        {universal['Wood'].map(x=>{
          return(
            <ComponentImage id={x.id} url={x.img} alt={x.name} />
            )
          })}
        </OpenCloseLayoutItems>
        <OpenCloseLayoutItems header='Stone'>
        {universal['Stone'].map(x=>{
          return(
            <ComponentImage id={x.id} url={x.img} alt={x.name} />
            )
          })}
        </OpenCloseLayoutItems>
        <OpenCloseLayoutItems header={props.animal + ' specific'}>
        {equipment[props.animal].map((i) => {
          return (
            <ComponentImage id={i.id} url={i.img} name={i.name} alt={i.name} />
            )
          })}
        </OpenCloseLayoutItems>
          </div>
    </section>
  )
}

export default Preview