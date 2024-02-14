import React from 'react'
import { useFormContext } from '../../context/formContext'

const NumberInput = ({name,value,title}) => {

    const {handleChange}=useFormContext()
    
    
      return (
        <div className='form-row flex-row'>
        <label htmlFor={name}>{title}</label>
        <input type='number' name={name} value={value} onChange={handleChange} />
        </div>
      )
    }

export default NumberInput