import React, { useRef } from 'react'

const OneCell = (props) => {
    const arrRef = useRef([]);
    var i = 1
    var count = 0
    var arr = []

    
    var img = require('../preview/Artboard '+i+'.png')
    const getRef = () => {
        i > 3 ? i=1: i++
        arrRef[5].current.src=require('../preview/Artboard '+i+'.png')
      }

        return(
       [...Array(props.height)].map((e, j) => <tr key={j} className='table-row'>
               {[...Array(props.width)].map((e, k) => <td onClick={getRef}  key={k} className='table-cell'>
               {/* <img className={'platform-img'} ref={arrRef[k]} src={img}></img>  */}
                
               {/* {arr.push([j,k]=['ahoj'])} */}
               </td>)
               }
             </tr>
             )
             )

}

export default OneCell

