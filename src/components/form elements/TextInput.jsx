import React,{Fragment} from 'react'
import { useFormContext } from '../../context/formContext'


const TextInput = ({name,value,title,className}) => {

const {handleChange}=useFormContext()


  return (
    <div className={`form-row flex-col wrap ${className}`}>
    <label htmlFor={name}>{title}</label>
    <input type='text' name={name} value={value} onChange={handleChange} />
    </div>
  )
}

export default TextInput