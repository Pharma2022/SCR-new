import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { YesNoRadio ,CustomRadio, RadioLabel} from '../form elements/Radios'
import TextArea from '../form elements/TextArea'
import TextInput from '../form elements/TextInput'
import { useFormContext } from '../../context/formContext'


const Smoking = ({isClozapine=false}) => {
    const {form:{smokes,cigNum,smokingAdvice,smokingAdviceComments,nrtConsent,preferredNrt,smokingReferral}}=useFormContext()
  return (
    <FormAccordion title={`Smoking Status`}>

        <RadioLabel className={'format flex-row'} label={<p className='bold underline'>Smoker</p>}>
                <CustomRadio       name='smokes'                  value='yes'       title={'Yes'} property={smokes} />
                <CustomRadio       name='smokes'                  value='no'    title={'No'}                             property={smokes} />
        </RadioLabel>
   
        {smokes==='yes' &&(<>
        
            <TextInput name='cigNum'         value={""||cigNum}    title='Number of cigarettes smoked per day' />
            
            <RadioLabel  className={`format `} name='smokingAdvice'                    value={smokingAdvice}        label={<p>Smoking Advice Given</p>}   >
              <CustomRadio name='smokingAdvice' value='yes' title={'Yes'} property={smokingAdvice}/>
              <CustomRadio name='smokingAdvice' value='no' title={'No'} property={smokingAdvice}/>
            </RadioLabel>
              {smokingAdvice? <TextArea  name='smokingAdviceComments' value={smokingAdviceComments} placeholder={'Specify'}/>
            :null  
          }
           <RadioLabel  className={`format `} name='nrtConsent'                    value={nrtConsent}        label={<p>Patient consents to nicotine replacement therapy prescription</p>}   >
              <CustomRadio name='nrtConsent' value='yes' title={'Yes'} property={nrtConsent}/>
              <CustomRadio name='nrtConsent' value='no' title={'No'} property={nrtConsent}/>
            </RadioLabel>
              {nrtConsent==='yes'? <TextArea placeholder={'Preferred NRT'}  name='preferredNrt'   value={preferredNrt}/>       :null  
          }

            <RadioLabel  className={`format `} name='smokingReferral' value={smokingReferral}  label={<p>Patient referred to smoking cessation service</p>}   >
              <CustomRadio name='smokingReferral' value='yes' title={'Yes'} property={smokingReferral}/>
              <CustomRadio name='smokingReferral' value='no' title={'No'} property={smokingReferral}/>

            </RadioLabel>
                      {smokingReferral==='yes'?<a href='https://my.northmid.nhs.uk/tackling-tobacco-dependency' target='_blank' >
                        To refer to the smoking cessation service, please click here
                      </a>:null}

          
        </>)}

        
    </FormAccordion>
  )
}

export default Smoking