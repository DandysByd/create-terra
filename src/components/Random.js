import React, { useState } from 'react'

function Random(props) {

    const [inputValue1, setInputValue1] = useState('');

    const value1 = (e) =>{
        e.preventDefault()
        setInputValue1(7)
        props.onSaveExpenseData(inputValue1);
    }

    return (
        
        <div>
            <form onSubmit={value1}>
            <button type='submit'>Sub</button>
            </form>
        </div>
    )
}

export default Random