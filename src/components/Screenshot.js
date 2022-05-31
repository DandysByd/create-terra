import html2canvas from 'html2canvas'
import React from 'react'

const Screenshot = () => {
    const screenshot = () =>{
        html2canvas(document.getElementById('photo')).then(function(canvas){
            document.body.appendChild(canvas)
        })

    }
    return (
        <div>
            <div id='photo'>
                <img width='200px' src={require('../images/chameleon.jpg')} />
            </div>
        <button onClick={screenshot}>click</button>

        </div>
    )
}

export default Screenshot