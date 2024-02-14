import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import styles from './RenderStyles'
import Title from '../Title'
import { singleOrDouble } from '../../helper'
const Discrepancies = () => {
const {form:{  newMeds,withheld,changed,pharmReferral,pharmReferralComments,discrepancies}}= useFormContext()


const returnUl=(element)=>(!element?<p style={{...styles.bold,...styles.mb0}}>Nil</p>: singleOrDouble(element) )
const empty=<p style={{...styles.bold,...styles.mb0}}>Nil</p>
  return (
    <div >
        {
          <>
              <Title>List of Discrepancies:</Title>
              <Title>Medication Stopped/Withheld</Title>
              {discrepancies? singleOrDouble(withheld): returnUl(withheld)}
              <Title>Medication Changed</Title>
              {discrepancies? singleOrDouble(changed): returnUl(changed)}
              <Title>New Medications</Title>
              {discrepancies? singleOrDouble(newMeds): returnUl(newMeds)}
          </> 
        }
        { <>
        <Title>Referral to Pharmacist/Technician</Title>
        {pharmReferral? singleOrDouble(pharmReferralComments):<p style={styles.bold}>Nil</p>}
        </>}
    </div>
  )
}

export default Discrepancies