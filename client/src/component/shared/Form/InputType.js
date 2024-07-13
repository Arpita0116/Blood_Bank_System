import React from 'react'

function InputType({ lableFor, lableText, inputType, value, onChange, name }) {
    return (
        <div className='md-3'>
            <label htmlFor={lableFor} className='form-label'>{lableText}</label>
            <input type={inputType} className="form-control" value={value} onChange={onChange} name={name} />

        </div>
    )
}

export default InputType