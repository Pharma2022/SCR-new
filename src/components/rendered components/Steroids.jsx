import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'
import styles from './RenderStyles'

const Steroids = () => {

    const {form:{hasRegMeds,hasSteroids,longTermHigh,longTermHighIndication,hasIcs,ics,hasEmergencySteroids,emergencySteroids,}}=useFormContext()
  return (
    <div>
        <Title>NPSA Alert Adults at Risk of Adrenal Crisis- Pharmacist to complete</Title>
        
        
        {hasRegMeds? (
        <>
        <p>{hasSteroids? "History of Steroid Therapy": "No Steroid Therapy"} </p>
        {hasSteroids&& 
        <Fragment>
        <p>If yes to any questions below, supply red steroid emergency 
        card on discharge (add red steroid card prompt on TTA). Refer to the bulletin 
        and Adrenal Crisis Clinical Guideline for full criteria.</p>
          <ul>
            <li style={styles.mb0}>Was the patient prescribed long term or high dose oral steroids before admission? <span style={styles.bold}>{longTermHigh? longTermHighIndication? `Yes ${longTermHighIndication}`:'Yes/No':"No"}  </span></li>
            <li style={styles.mb0}>Was the patient high dose Inhaled steroids before admission? <span style={styles.bold}>{hasIcs?ics? `Yes ${ics}`:'Yes/No':"No"} </span></li>
            <li style={styles.mb0}>Was the patient prescribed emergency hydrocortisone injection before admission? <span style={styles.bold}>{hasEmergencySteroids? emergencySteroids? `Yes ${emergencySteroids}`:'Yes/No':"No"}  </span></li>     
          </ul>


        </Fragment>
        }
        </>): <p style={{...styles.mb0,...styles.bold}}>Nil</p>}
    </div>
  )
}

export default Steroids