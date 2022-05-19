import React from 'react'

const Button = (props) => {
  return (
    <div style={{backgroundColor:props.bgcolor}} onClick={props.func} className={props.classDiv}><p className={props.classP}>{props.buttonText}</p></div>
  )
}

export default Button