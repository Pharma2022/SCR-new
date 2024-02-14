import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { YesNoRadio } from '../form elements/Radios'
import TextArea from '../form elements/TextArea'
import { useFormContext } from '../../context/formContext'
const Discrepancies = () => {

    const {form:{discrepancies, newMeds,changed,withheld,pharmReferral,pharmReferralComments,}}=useFormContext()
  
  const boldUnderline='bold underline mb-0'
    return (
    <FormAccordion title={'Discrepancies/Pharmacist/MMT Referral'}>

    <YesNoRadio name={'discrepancies'}    value={discrepancies}  label={<p className={boldUnderline}>Discrepancies found?</p>}>
      <p className={boldUnderline}>List of Discrepancies (with Reasons)</p>
      <p className={boldUnderline}> Medication Stopped/Withheld</p>
      <TextArea name='withheld' value={withheld} placeholder={'Stopped/Withheld'}/>
      <p className={boldUnderline}> Medication Changed</p>
      <TextArea name='changed' value={changed} placeholder={'Changed'}/>
      <p className={boldUnderline}> New Medications </p>
      <TextArea name='newMeds' value={newMeds} placeholder={'New'}/>
      
      </YesNoRadio>    
    <YesNoRadio     name='pharmReferral'        value={pharmReferral}  no='N/A' label={<p className={boldUnderline}>Referral to Pharmacist /Pharmacy Technician</p>}>
          <TextArea name='pharmReferralComments' value={pharmReferralComments} placeholder={'Enter details'}/>
    </YesNoRadio>

    </FormAccordion>
  )
}

export default Discrepancies