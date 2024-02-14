import React from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'
import Title from '../Title'
import styles from './RenderStyles'
const Allergies = () => {
    const {form:{hasAllergy,allergies}}=useFormContext()
  return (
    <>  <Title>Allergies/Adverse Reactions:</Title>
    <p>{hasAllergy==='yes'? 
    !allergies.length?'': allergies.split('\n').map(allergy=>(<li style={styles.bold} key={nanoid()}>{allergy}</li>))
    : hasAllergy==="no"? 'NKDA'
    :'please confirm'}</p>
    
    </>
  )
}

export default Allergies