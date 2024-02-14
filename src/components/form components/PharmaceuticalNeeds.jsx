import React,{Fragment} from 'react'
import { useFormContext } from '../../context/formContext'
import FormAccordion from '../form elements/FormAccordion'
import { RadioLabel,CustomRadio,YesNoRadio } from '../form elements/Radios'
import TextInput from '../form elements/TextInput'
import FormDate from '../form elements/Date'
import TextArea from '../form elements/TextArea'
import SelectInput from '../form elements/SelectInput'

const PharmaceuticalNeeds = () => {
    const {form:{medsManagement,isMca,isDms,hasDmsConsent,isDosette,chemistName,chemistNo,odsCode,nhsMail,lastSupplyDate,
        commsIssues,commsIssuesComments, counsellingReq,counsellingReqComments,compliance,complianceComments, 
    },setFormData}=useFormContext()



  return (
    <FormAccordion title={'Pharmaceutical Needs'}>
    <RadioLabel className={'format flex-col'} label={<p className='bold underline'>Pharmaceutical Needs Assessment</p>}>
      <CustomRadio       name='isMca'                  value='dosetteBox'       title={'Medication compliance aid(e.g. dosette box)'} property={isMca} />
      <CustomRadio       name='isMca'                  value='originalBoxes'    title={'Original Boxes '}                             property={isMca} />
      <CustomRadio       name='isMca'                  value='both'             title={'Both '}                                       property={isMca} />
    </RadioLabel>
    <RadioLabel className={'format flex-row w-full wrap'} label={<p className='bold underline'>Medicines Management</p>}>
      <CustomRadio name='medsManagement' value='self' title='Self'     property={medsManagement}/>
      <CustomRadio name='medsManagement' value='relative' title='Relative' property={medsManagement}/>
      <CustomRadio name='medsManagement' value='carer' title='Carer' property={medsManagement}/>
      <CustomRadio name='medsManagement' value='Nursing Home Staff' title='Nursing Home Staff' property={medsManagement}/>
    </RadioLabel>
    <RadioLabel className={'format'} name='isDms'  label={<p className='bold underline'>Does this patient meet the <span className='bold'>discharge medicines service(dms)</span> referral criteria?</p> } >
                <CustomRadio name='isDms' value='yes' title={'Yes'} property={isDms}/>
                <CustomRadio name='isDms' value='no' title={'No'} property={isDms}/>
            </RadioLabel>
            


          {isDms==='yes'? 
          
          <RadioLabel className={'format'} name='hasDmsConsent'  label={<p>If yes, complete all community pharmacy details including ODS code (obtainable from SCR).Has the patient given consent to send information to the nominated pharmacy?</p>}>
                <CustomRadio name='hasDmsConsent' value='yes' title={'Yes'} property={hasDmsConsent}/>
                <CustomRadio name='hasDmsConsent' value='no'  title={'No'} property={hasDmsConsent}/>
          </RadioLabel>
          :null}  

    <RadioLabel  className={`format w-full `}     label={<p>Dosette box patient</p>}   >
        <CustomRadio name='isDosette' value='yes' title={'Yes'} property={isDosette}/>
        <CustomRadio name='isDosette' value='no' title={'No'} property={isDosette}/>  
    </RadioLabel>
        
          
          
      
        <SelectInput name='chemistName'                   title='Community pharmacy name'/>
        <TextInput name='odsCode'                value={odsCode}             title='ODS Code'/>
        <TextInput name='chemistNo'              value={chemistNo}           title='Contact number'/>
        <TextInput name='nhsMail'                value={nhsMail}             title='NHS Email'/>
        <FormDate  name='lastSupplyDate'         value={lastSupplyDate}      title='Date of last supply'/>
    <YesNoRadio    name='commsIssues'            value={commsIssues}         label={<p>Communication concerns (e.g.visual/hearing/language)</p>} >
        <TextArea  name='commsIssuesComments'    value={commsIssuesComments} placeholder='Specify'/>
    </YesNoRadio>
    <YesNoRadio    name='counsellingReq'         value={counsellingReq}      label={<p>Counselling required</p>}>
       <TextArea   name='counsellingReqComments' value={counsellingReqComments} placeholder='Specify'/>
    </YesNoRadio>
    <YesNoRadio    name='compliance'             value={compliance}          label={<p>Compliance issues</p>}>
        <TextArea  name='complianceComments'     value={complianceComments}  placeholder='Specify'/>
    </YesNoRadio>
    {commsIssues&&
    <Fragment>

<p>Any patients with a language barrier please use  
  
  <a href='https://my.northmid.nhs.uk/translator' target='_blank'> DA Languages’ translation service </a></p>

<p> PIN for DA languages:  <span className='bold'>74850973</span>
</p>
      </Fragment>}
      </FormAccordion>
  )
}

export default PharmaceuticalNeeds