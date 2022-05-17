import React from 'react'

function Animals(props) {


  return (
    <button onClick={props.click}>{props.anim}</button>

  )
}

export default Animals