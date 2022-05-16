import React, { useState } from 'react'

function ChangeForm(props) {
  //Dimensions state
  var [width, setWidth] = useState(0);
  var [height, setHeight] = useState(0);
  var [depth, setDepth] = useState(0);

  //Dimensions setters
  function getValueWidth(e) {
      setWidth(e.target.value);
      props.width = width;
  }
  function getValueHeight(e) {
      setHeight(e.target.value);
      props.height = height;
  }
  function getValueDepth(e) {
      setDepth(e.target.value);
      props.depth = depth;
  }

  return {
      width,height,depth,
      render:(
      <div className='dimensions'>
          <div>
              <label>Width</label>
              <input onChange={getValueWidth} type='number' id='width-input'></input>
          </div>
          <div>
              <label>Height</label>
              <input onChange={getValueHeight} type='number' id='height-input'></input>
          </div>
          <div>
              <label>Depth</label>
              <input onChange={getValueDepth} type='number' id='depth-input'></input>
          </div>
      </div>
  )}
}

export default ChangeForm