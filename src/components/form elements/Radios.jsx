import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import {nanoid} from 'nanoid'

const RadioLabel=({label,children,col,className})=>(
<div className={`form-row flex-col`} >
    <span>{label}</span>
    <span className={`${col&&'flex-col'}  ${className}`}>{children}</span>
</div>

)

const Radio=({name,title,value,property ,className})=>{
  const {handleChange}=useFormContext()
  return(
    
    <label className={className} >{title}
    <input    type="radio" name={name} value={value} onChange={handleChange} checked={property===value}  />
    </label>

  )
}

const CustomRadio=({name,title,value,property})=>{
  const {handleChange}=useFormContext()
  return(
    
    <label className={ `pointer radio-btn ${property===value&&'green-toggle'}`} >{title}
    <input    type="radio" name={name} value={value} onChange={handleChange} checked={property===value}  />
    </label>

  )
}

const YesNoRadio = ({label,value,name,yes,no,children}) => {
    const {handleChange}=useFormContext()



  return (
    <Fragment>
   <RadioLabel className={`format`} label={label }>

        <label value={true}  style={{cursor:'pointer'}}  className={`radio-btn ${value&&'green-toggle' }` } onClick={handleChange} name={name} >{yes? yes:"Yes"}
        <input  className='yesno'  type="radio" name={name} value={true} onChange={handleChange} checked={value}  />
        </label>

        
         <label value={""} style={{cursor:'pointer'}}  className={`radio-btn ${!value ?'green-toggle':"" }` } onClick={handleChange} name={name} >{no? no :"No"}
         
         <input  className='yesno' type="radio" name={name} value={""} onChange={handleChange} checked={!value}  />
         </label>
      


   </RadioLabel>
    {value&& children}
   </Fragment>
  )
}

const CustomYesNoRadio=({label,name,property,isBold=False,yesTitle,noTitle,yesValue,noValue})=>{
  return (
  <>
  <RadioLabel className={'format flex-row'} label={<p className={isBold&&'bold underline'}>{label}</p>}>
        <CustomRadio
          name={name}
          value={'yes'||yesValue}
          title={'Yes'||yesTitle}
          property={property}/>
          <CustomRadio
          name={name}
          value={'no'||noValue}
          title={'No'||noTitle}
          property={property}/>
  </RadioLabel>

  
  </>
  )
  
}



const GenericRadio=({property,value,onClick,children})=>{

return (<p  className={ `pointer radio-btn ${property===value&&'green-toggle'}`} onClick={onClick}>{children}</p>
)

}

export {YesNoRadio,Radio,RadioLabel,GenericRadio,CustomRadio,CustomYesNoRadio}