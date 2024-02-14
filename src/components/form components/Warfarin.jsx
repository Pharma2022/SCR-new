import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { YesNoRadio } from '../form elements/Radios'
import TextInput from '../form elements/TextInput'
import FormDate from '../form elements/Date'
import { useFormContext } from '../../context/formContext'



const Warfarin = () => {
    const {form:{hasWarfarin,warfarinIndication,warfarinRange,warfarinDose,warfarinDuration,warfarinLastAppt,warfarinINR,warfarinClinic,warfarinClinicContactNo,warfarinClinicEmail,warfarinNextAppt}}=useFormContext()
  return (
    <FormAccordion title={'Anticoagulation'} defaultState={false}>
      <p className='mb0'>If normally on warfarin, please complete the following details:</p>
    <YesNoRadio        name='hasWarfarin'             value={hasWarfarin}                label={<p className='bold underline'>Anticoagulation</p>}>
            <TextInput name='warfarinIndication'      value={warfarinIndication}         title='Indication' />
            <TextInput name='warfarinRange'           value={warfarinRange}              title='Target Range' />
            <TextInput name='warfarinDose'            value={warfarinDose}               title='Dose' />
            <TextInput name='warfarinDuration'        value={warfarinDuration}           title='Duration' />
            <FormDate  name='warfarinLastAppt'        value={warfarinLastAppt}           title='Last appointment Date' />
            <TextInput name='warfarinINR'             value={warfarinINR}                title='Last INR Result'/>
            <TextInput name='warfarinClinic'          value={warfarinClinic}             title='Name of anticoagulation clinic/provider'/>
            <TextInput name='warfarinClinicContactNo' value={warfarinClinicContactNo}    title='Contact number of provider'/>
            <TextInput name='warfarinClinicEmail'     value={warfarinClinicEmail}        title='Email of provider'/>
            <FormDate  name='warfarinNextAppt'   dateLimit={false}     value={warfarinNextAppt}           title='Date of next appointment' />
    </YesNoRadio>
    </FormAccordion>
  )
}

export default Warfarin