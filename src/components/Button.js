import React from 'react'

const Button = (props) => {
  return (
    <div onClick={props.func} className={props.classDiv}><p className={props.classP}>{props.buttonText}</p></div>
  )
}

export default Button