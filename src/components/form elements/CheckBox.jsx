import React from 'react'
import { useFormContext } from '../../context/formContext'

const CheckBox = ({title,value,name}) => {
    const {handleChange}=useFormContext()
  return (
    <div className='checkbox'>
    <label htmlFor={name} >{title}
    </label>
           <input 
                type="checkbox" 
                checked={value}
                onChange={handleChange}
                name={name}
            />
            </div>
  )
}

export default CheckBox