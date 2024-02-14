import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { GenericRadio,YesNoRadio } from '../form elements/Radios'
import TextArea from '../form elements/TextArea'
import { useFormContext } from '../../context/formContext'
import Button from '../Button'

const Medications = () => {

 
    const {form,sortAcuteMeds,sortRegMeds,formatregFreetype,formatregSCR,acuteFormat,regFormat,formatAcuteSCR,formatAcuteFreetype,formatregHie,sortRegHieMeds,sortAcuteHieMeds,formatacuteHie}=useFormContext()
    const {hasRegMeds,regMeds,hasAcuteMeds,acuteMeds,hasOtcMeds,otcMeds}=form

    return (
    <>
        <FormAccordion title={'Regular Medicines'}>
            <YesNoRadio    
              name='hasRegMeds'     
              value={hasRegMeds}    
              label={<p className='bold underline'>Regular Medicines </p>} >
                <span className='form-row format '>
                    <GenericRadio property={regFormat} value='scr'      onClick={formatregSCR} >Copy from SCR </GenericRadio>
                    <GenericRadio property={regFormat} value='freetype' onClick={formatregFreetype} >Freetype</GenericRadio>
                    {/* <GenericRadio property={regFormat} value='hie' onClick={formatregHie} >HIE</GenericRadio> */}
                </span>
                   <TextArea    name='regMeds'        value={regMeds}/>
                   {regMeds&& regFormat==='scr'? <Button  onClick={sortRegMeds}>Sort</Button>:null}
                   {/* {regMeds&& regFormat==='hie'? <Button  onClick={sortRegHieMeds}>Sort</Button>:null}     */}
              </YesNoRadio> 
          </FormAccordion>
          <FormAccordion title={'Acute Medicines'}>
              <YesNoRadio    name='hasAcuteMeds'   value={hasAcuteMeds}  label={<p className='bold underline'>Acute Medicines </p>} >
                <span className='form-row format '>
                    <GenericRadio property={acuteFormat} value='scr'      onClick={formatAcuteSCR} >Copy from SCR </GenericRadio>
                    <GenericRadio property={acuteFormat} value='freetype' onClick={formatAcuteFreetype} >Freetype</           GenericRadio>
                    {/* <GenericRadio property={acuteFormat} value='hie'      onClick={formatacuteHie}>HIE               </GenericRadio> */}
                </span>
                <TextArea    name='acuteMeds'      value={acuteMeds}/>

               {acuteMeds &&acuteFormat==='scr' ? <Button  onClick={sortAcuteMeds}>Sort</Button>:null}
               {/* {acuteMeds &&acuteFormat==='hie' ? <Button  onClick={sortAcuteHieMeds}>Sort</Button>:null} */}
              </YesNoRadio>
          </FormAccordion>
          <FormAccordion title={'OTC/Herbal Preparations/Recreational/Other'}>
              <YesNoRadio    name='hasOtcMeds'     value={hasOtcMeds}    label={<p className='bold underline'>OTC/Herbal Preparations/Illicit Drugs/Alcohol/Other</p>} >
                  <TextArea    name='otcMeds'        value={otcMeds}/>
              </YesNoRadio> 
          </FormAccordion>
    
    </>
  )
}

export default Medications