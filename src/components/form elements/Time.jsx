import React from 'react'
import { useFormContext } from '../../context/formContext'


const Time = ({name,value,title, className}) => {

const {handleChange}=useFormContext()


  return (
    <div className={`form-row flex-col ${className}`}>
    <label htmlFor={name}>{title}</label>
    <input name={name} value={value} onChange={handleChange} type='time'/>
    </div>
  )
}

export default Time