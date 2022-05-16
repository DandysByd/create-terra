import React, { useState } from 'react'
import ChangeForm from './ChangeForm';
import Random from './Random';
import './styles/changes.css'

function Changes(props) {

    function Dimension({ width, height, depth }) {
        return (
            <></>
        )
    }


    const { render, width, height, depth } = ChangeForm()
    var content = width * height * depth;
    content = content / 1000000

    const saveExpenseDatahandler = (entereExpenseData) =>{
        console.log(entereExpenseData)
    }

    return (
        <>
            <div className='preview'><p>{width + 'x' + height + 'x' + depth + 'cm, which is ' + content + 'm^3'}</p></div>
            <Dimension {...{ width, height, depth }} />
            {render}

         
            <Random onSaveExpenseData={saveExpenseDatahandler}></Random>
        </>
    )

}

export default Changes