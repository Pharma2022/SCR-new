import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons'
const FormAccordion = ({title,children,defaultState=true}) => {

    const [isShown,setIsShown]=useState(defaultState)
    const toggleShown=()=>setIsShown(prev=>!prev)
  return (
    <div style={{marginBottom:'.5rem'}}>
    <p onClick={toggleShown} className='bold underline mb-0 accordion-icon flex-row align-center space-between'>{title} <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} /></p>
    {isShown? children: null}
    </div>
  //  <>{children}</>
  )
}

export default FormAccordion

