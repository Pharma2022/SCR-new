import React from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'
import { Para } from '../Title'
import styles from './RenderStyles'
const DischargePlan = () => {
    const {form:{dischargeDestination,dischargePlan}}=useFormContext()
  return (
    <><Title>Discharge plan </Title> <span style={{...styles.bold,...styles.underline}}>{!dischargePlan? 'Please Select':""}</span>

    {dischargePlan? (<Para>Expected to be discharged to:
      <span style={styles.bold}>

    {dischargePlan==='nursingHome'?' Nursing Home (supply original packs only for discharge)'
    :dischargePlan==='notKnown'?' Not known on admission'
    :dischargePlan==='other'?  dischargeDestination
    : ' Own home' }  
        </span>
    </Para>):
    <ul >
      <li>Own Home</li>
      <li>Nursing Home (supply original packs only for discharge)</li>
      <li>Not Known on Admission</li>
      <li>Other- please specify</li>
      </ul>
    }   
    </>

  )
}

export default DischargePlan