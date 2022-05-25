import React, { useRef } from 'react'
import OneCell from './OneCell';
import './styles/preview.css'

function Preview(props) {

  var width = 30;
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
    height = Math.floor(height / 6)
    width = Math.floor(width / 8)
  } else if (width <= 50 && height <= 50) {
    height = Math.floor(height / 5)
    width = Math.floor(width / 5)
  } else if (width >= height) {
    height = Math.floor(height / 6)
    width = Math.floor(width / 6)
  } else {
    height = Math.floor(height / 8)
    width = Math.floor(width / 6)
  }




  return (
    <section className='container'>
      <table style={{ borderTop: borderTop, borderLeft: borderLeft, borderRight: borderRight, borderBottom: borderBottom, backgroundColor: props.backgroundColor, aspectRatio: width / height }} cellSpacing='0' className='table-holder' >
      <OneCell width={width} height={height}/>
      </table>
    </section>
  )
}

export default Preview