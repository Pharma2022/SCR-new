import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { YesNoRadio,CustomRadio,RadioLabel } from '../form elements/Radios'
import TextInput from '../form elements/TextInput'
import FormDate from '../form elements/Date'
import { useFormContext } from '../../context/formContext'

const Methadone = () => {
    const {form:{ hasOpioidReplacement,opioid,opioidDose,lastOpioidSupply,opioidChemistNameAndNo,dals,dalsContactNo,dalsEmail,keyWorkerName,
        }}=useFormContext()
  return (
    <FormAccordion title={'Methadone/Buprenorphine'} defaultState={false}>
    <YesNoRadio         name='hasOpioidReplacement'   value={hasOpioidReplacement}      label={<p className='bold underline'>Methadone/Buprenorphine</p>}>
            <RadioLabel className={'format'} label={<p >If normally on methadone/buprenorphine please provide the following details</p>}>
              <CustomRadio    name='opioid'                 value='Methadone'                 title={'Methadone'}     property={opioid} />
              <CustomRadio    name='opioid'                 value='Buprenorphine'             title={'Buprenorphine'} property={opioid} />
            </RadioLabel>
            <TextInput  name='opioidDose'             value={opioidDose}                title={'Dose'}/>
            {opioid&& 
            <FormDate   name='lastOpioidSupply'       value={lastOpioidSupply}          title={`last supply of ${opioid}`}/>}
            <TextInput  name='opioidChemistNameAndNo' value={opioidChemistNameAndNo}    title={'Chemist name and number'}/>
            <TextInput  name='dals'                   value={dals}                      title={'Name of drug advisory service'}/>
            <TextInput  name='dalsContactNo'          value={dalsContactNo}             title={'Contact No '}/>
            <TextInput  name='dalsEmail'              value={dalsEmail}                 title={'Email Address'}/>
            <TextInput  name='keyWorkerName'          value={keyWorkerName}             title={'Key worker name'}/>

            <a href="https://my.northmid.nhs.uk/download.cfm?ver=12635" target="_blank">Please refer to methadone guideline</a>
    </YesNoRadio>
    </FormAccordion>
  )
}

export default Methadone