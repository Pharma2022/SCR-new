import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { RadioLabel,CustomRadio } from '../form elements/Radios'
import { useFormContext } from '../../context/formContext'
const Vte = () => {

    const {form:{vte}}=useFormContext()
    
  
  return (
    <FormAccordion title={'VTE Prophylaxis'}>
    <RadioLabel className={'format flex-row'} label={<p className='bold underline'>VTE Prophylaxis prescribed</p>}>
      <CustomRadio       
            name='vte'                  
            value='yes'       
            title={'Yes'} 
            property={vte} />
      <CustomRadio       
            name='vte'                  
            value='no'    
            title={'No'}                             
            property={vte} />
                          
    </RadioLabel>
</FormAccordion>
  )
}

export default Vte