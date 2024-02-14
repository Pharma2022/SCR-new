import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'
import Title from '../Title'
import styles from './RenderStyles'

const Methadone = () => {

    const {form:{hasRegMeds, hasOpioidReplacement,opioid,opioidDose,lastOpioidSupply,opioidChemistNameAndNo,dals,dalsContactNo,dalsEmail,keyWorkerName,}}=useFormContext()
  return (
    <div>
        <Title>Methadone/Buprenorphine: </Title>
        {hasRegMeds?(<>
        <p style={{...styles.mb0,...styles.bold}}>{hasOpioidReplacement? (opioid||'Please Select: Methadone/Buprenorphine ') :"Nil"}</p>
        {hasOpioidReplacement&&
        <Fragment>
        <p style={styles.mb0} >Dose:<span style={styles.bold}> {opioidDose}</span></p>
        <p style={styles.mb0}>Last Supply:<span style={styles.bold}> {formatDate(lastOpioidSupply)}</span></p>    
        <p style={styles.mb0}>Chemist name and number:<span style={styles.bold}> {opioidChemistNameAndNo}</span></p>
        <p style={styles.mb0}>Name of drug advisory service:<span style={styles.bold}> {dals}</span></p>
        <p style={styles.mb0}>Telephone:<span style={styles.bold}> {dalsContactNo}</span></p>
        <p style={styles.mb0}>Email:<span style={styles.bold}> {dalsEmail}</span></p>
        <p >Key Worker:<span style={styles.bold}> {keyWorkerName}</span></p>    
        </Fragment>}
        </>): <p style={{...styles.mb0,...styles.bold}}>Nil</p>}
    </div>
  )
}

export default Methadone