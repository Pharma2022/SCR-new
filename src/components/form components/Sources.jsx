import React from 'react'
import { nanoid } from 'nanoid'
import FormDate from '../form elements/Date'
import CheckBox from '../form elements/CheckBox'
import TextInput from '../form elements/TextInput'
import { useFormContext } from '../../context/formContext'
import FormAccordion from '../form elements/FormAccordion'

const Sources = ({children}) => {
    const {form:{ nok,nokContact,nokName,carer,carerName,carerContact,hie,GP,nursingHome,nursingHomeMar,nursingHomeName,nursingHomeStaffName,nursingHomeContact},checkboxesArray}=useFormContext()
  return (
    <FormAccordion title={'Sources'}>
    <div className='checkboxes wrap'>
    {checkboxesArray.map(({name,value,title,isDate,conditional})=> isDate? (conditional&&
    <FormDate key={nanoid()} name={name} value={value}  title={title} />) :(
    <CheckBox key={nanoid()} name={name} value={value} title={title} />))}
   

    <CheckBox key={nanoid()} name={'nursingHome'} value={nursingHome} title={'Nursing Home'}/>
    <CheckBox key={nanoid()} name={'nursingHomeMar'} value={nursingHomeMar} title={'Nursing Home MAR Chart'}/>

    {(nursingHome||nursingHomeMar)&&(
      <>
      <TextInput name={'nursingHomeName'} value={nursingHomeName} title={'Enter Nursing Home Name'}/>
      {nursingHome&&<TextInput name={'nursingHomeStaffName'} value={nursingHomeStaffName} title={'Enter Staff Name'}/>}
      <TextInput name={'nursingHomeContact'} value={nursingHomeContact} title={'Enter Contact number'}/>
      </>

    )} 


   
    <CheckBox key={nanoid()} name={'nok'} value={nok} title={'Relative'}/>

    {nok? 
    <>
    <TextInput className={'x'} name={'nokName'}    value={nokName}    title={'Enter Name+Relation to patient'}/>
    <TextInput className={'x'} name={'nokContact'} value={nokContact} title={'Enter Contact number'}/>
    </>:null}
    <CheckBox key={nanoid()} name={'carer'} value={carer} title={'Carer'}/>

    {carer? 
    <>
    <TextInput className={'x'} name={'carerName'}    value={carerName}    title={'Enter Name'}/>
    <TextInput className={'x'} name={'carerContact'} value={carerContact} title={'Enter Contact number'}/>
    </>:null}  
     <CheckBox key={nanoid()} name={'hie'} value={hie} title={'HIE'}/> 
     <CheckBox key={nanoid()} name={'GP'} value={GP} title={'GP'}/>
    {children}
      

  </div>
  </FormAccordion>
  )
}

export default Sources