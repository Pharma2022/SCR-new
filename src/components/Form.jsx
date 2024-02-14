import React from 'react'
import '../index.css'

import PharmaceuticalNeeds from './form components/PharmaceuticalNeeds'
import FormAccordion from './form elements/FormAccordion'
import CompletedBy from './form components/CompletedBy'
import Sources from './form components/Sources'
import Allergies from './form components/Allergies'
import Smoking from './form components/Smoking'
import DischargePlan from './form components/DischargePlan'
import Vte from './form components/Vte'
import Discrepancies from './form components/Discrepancies'
import Steroids from './form components/Steroids'
import Methadone from './form components/Methadone'
import Warfarin from './form components/Warfarin'
import Discharge from './form components/Discharge'
import Medications from './form components/Medications'

const Form = () => {
  
   
              return (
                <form className='form container flex-col'  >
                  <CompletedBy/>
                  <Allergies/>  
                  <Sources/>
                  <Medications/>
                  <Vte/>
                  <Smoking/>
                  <Discrepancies/>
                  <Steroids/>
                  <PharmaceuticalNeeds/>
                  <Warfarin/>
                  <Methadone/>
                  <FormAccordion title={'Discharge'}>
                     <Discharge/>
                    <DischargePlan/>
                  </FormAccordion>
          




    </form>
  
  )
}

export default Form