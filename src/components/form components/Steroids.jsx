import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { YesNoRadio } from '../form elements/Radios'
import TextArea from '../form elements/TextArea'
import { useFormContext } from '../../context/formContext'


const Steroids = () => {

    const {form:{hasSteroids,longTermHigh,longTermHighIndication,hasIcs,ics,hasEmergencySteroids,emergencySteroids}}=useFormContext()
  return (
    <FormAccordion title={'Steroids'} >
    <YesNoRadio     
                name='hasSteroids'    value={hasSteroids}     yes='History of steroid therapy' no='No Steroid Therapy' 
                label={<p className='bold underline'>NPSA Alert Adults at Risk of Adrenal Crisis- Pharmacist to complete</p>}>
          <p>If yes to any questions below, supply red steroid emergency card on discharge (add red steroid card prompt on TTA).
            Refer to the bulletin and Adrenal Crisis Clinical Guideline for full criteria.</p>
        <a href='https://my.northmid.nhs.uk/download.cfm?ver=9962%3E' target='_blank'>
              Link to Adrenal Crisis guideline
        </a>
        <ul>
            <li><YesNoRadio  
                    name='longTermHigh'          
                    value={longTermHigh}
                    label={<p>Was the patient prescribed long term or high dose <span className='underline'>oral</span> steroids before admission</p>}
                    >
                <TextArea name='longTermHighIndication' value={longTermHighIndication} placeholder={'State Indication'}/>
                </YesNoRadio>
            </li>
            <li>
                <YesNoRadio  name='hasIcs'                 value={hasIcs}
                            label={<p>Was the patient high dose <span className='bold underline'>inhaled</span> steroids before admission</p>}>
                        <TextArea name='ics'               value={ics} placeholder={'Specify'}/>
                </YesNoRadio>
            </li>
            <li>
            <YesNoRadio  name='hasEmergencySteroids'   value={hasEmergencySteroids}
                    label={<p>Was the patient prescribed <span className='underline'>emergency hydrocortisone injection</span>  before admission </p>}>
                <TextArea name='emergencySteroids' value={emergencySteroids} placeholder={'Specify'}/>
        </YesNoRadio>
            </li>
        </ul>
    
    </YesNoRadio>
    </FormAccordion>
  )
}

export default Steroids