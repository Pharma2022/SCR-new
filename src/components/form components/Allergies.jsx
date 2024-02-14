import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { YesNoRadio,CustomRadio,RadioLabel } from '../form elements/Radios'
import TextArea from '../form elements/TextArea'
import { useFormContext } from '../../context/formContext'
import { emptyForm } from '../../data/consts'

const Allergies = () => {
    const {form:{hasAllergy,allergies},setFormData}=useFormContext()

  return (
    <FormAccordion title={'Allergies/Adverse Reactions'}>
              <RadioLabel className={'format flex-row'} label={<p className='bold underline'>Patient drug allergies/sensitivities and reactions</p>}>
                <CustomRadio       
                    name='hasAllergy'                  
                    value='yes'       
                    title={'Yes'} 
                    property={hasAllergy} />
                <CustomRadio       
                    name='hasAllergy'                  
                    value='no'    
                    title={'NKDA'}                             
                    property={hasAllergy} />
                                    
              </RadioLabel>
              {hasAllergy==='yes'&&<TextArea    name='allergies'      value={allergies}/>}
   </FormAccordion>
  )
}

export default Allergies