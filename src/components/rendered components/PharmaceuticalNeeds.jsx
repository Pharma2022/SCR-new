import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'
import Title from '../Title'
import styles from './RenderStyles'

const PharmaceuticalNeeds = () => {
    
    const {form:{ isMca,isDms,hasDmsConsent,isDosette,chemistName,chemistNo,odsCode,nhsMail,lastSupplyDate,
        commsIssues,commsIssuesComments, counsellingReq,counsellingReqComments,compliance,complianceComments,medsManagement 
    }}=useFormContext()

const {bold,mb0}=styles

  return (
    <div>

        <Title>Pharmaceutical Needs Assessment</Title>

        <p style={{...mb0,...bold}} >{!isMca?'Original boxes/Medication compliance aid(e.g. dosette box)': isMca==='originalBoxes'? "Original boxes": isMca==="dosetteBox"? "Dosette box": isMca==='both' && "Original boxes AND Dosette box"}</p>
        
        
        <p>Medicines managed <span style={bold}>{ (medsManagement? 'by '+medsManagement:'by self/ by relative/ by carer/by Nursing Home Staff')}</span></p>

        
        
        <p style={mb0} >Does this patient meet the discharge medicines service(dms) referral criteria? <span style={bold}>{isDms||'Yes/No'}</span></p>
        {isDms!=='no'&&< p style={mb0}>Has the patient given consent to send information to the nominated pharmacy? <span style={bold}>{hasDmsConsent||'Yes/No'}</span></p>||null}
            
        
        <p style={mb0}>Dosette Box patient: <span style={bold}> {isDosette||'Yes/No'}</span></p>
        
        
        <p style={mb0}>Community pharmacy name:<span style={bold}>{chemistName} </span></p>
        <p style={mb0}>Contact no:<span style={bold}> {chemistNo}</span></p>
        <p style={mb0}>ODS Code:<span style={bold}> {odsCode}</span></p>
        <p style={mb0}>NHS email:<span style={bold}> {nhsMail}</span></p>
        <p style={mb0}>Last Supply Date:<span style={bold}> {formatDate(lastSupplyDate)}</span></p>
        <p style={mb0}>Communication concerns:<span style={bold}> {commsIssues? commsIssuesComments:"Nil"}</span></p>
        <p style={mb0}>Counselling  required:<span style={bold}> {counsellingReq? counsellingReqComments:"Nil"}</span></p>
        <p >Compliance issues:<span style={bold}> {compliance? complianceComments:"Nil"}</span></p>
        <p>Any patients with a language barrier please use  https://my.northmid.nhs.uk/translator
  
        </p>
     
<p> PIN for DA languages:  <span className='bold'>74850973</span>
</p>
   </div>
  )
}

export default PharmaceuticalNeeds