import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'
import styles from './RenderStyles'

const Smoking = () => {

const {form:{smokes,cigNum,smokingAdvice,smokingAdviceComments,nrtConsent,preferredNrt,smokingReferral, }}=useFormContext()


  return (
    <div>
        <Title>Smoking Status</Title>  
        {<p style={styles.mb0}>Smoker? <span style={styles.bold}>{smokes||'Yes/No'}</span></p>}
       {smokes!=='no'&&(<>
        <p style={styles.mb0}>Number of cigarettes smoked per day: <span style={styles.bold}>{cigNum}</span></p>
        <p style={styles.mb0}>Smoking Advice given <span style={styles.bold}>{smokingAdvice? smokingAdvice :'Yes/No' } </span></p>
        {smokingAdvice&& <p style={styles.mb0}><span style={styles.bold}>{smokingAdviceComments} </span></p>}
        <p style={styles.mb0}>Consents to NRT ? <span style={styles.bold}>{nrtConsent ==='yes'? `Yes,preferred NRT: ${preferredNrt}`: nrtConsent==="no"? 'No' : 'Yes/No'} </span></p>
        <p >Patient referred to smoking cessation service: <span style={styles.bold}>{smokingReferral||'Yes/No'}</span></p>
  
       </>)
       } 
      


    </div>
  )
}

export default Smoking

