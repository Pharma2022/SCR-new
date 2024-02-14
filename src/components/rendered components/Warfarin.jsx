import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'
import Title from '../Title'
import styles from './RenderStyles'
const Warfarin = () => {
    const {form:{hasRegMeds,hasWarfarin,warfarinIndication,warfarinRange,warfarinDose,warfarinDuration,warfarinLastAppt
        ,warfarinINR,warfarinClinic,warfarinClinicContactNo,warfarinClinicEmail,warfarinNextAppt}}=useFormContext()

  return (
    <div>
     <Title>Anticoagulation:</Title>
     {hasRegMeds?( <>
        <p style={styles.mb0}>{hasWarfarin?"If normally on warfarin, please complete the following details:":"Nil"}</p>
        {hasWarfarin&&
        <Fragment>
        <p style={styles.mb0}>Indication: <span style={styles.bold}>{warfarinIndication}</span></p>
        <p style={styles.mb0}>Range: <span style={styles.bold}>{warfarinRange}</span></p>
        <p style={styles.mb0}>Dose: <span style={styles.bold}>{warfarinDose}</span></p>
        <p style={styles.mb0}>Duration: <span style={styles.bold}>{warfarinDuration}</span></p>
        <p style={styles.mb0}>Last appointment date: <span style={styles.bold}>{ formatDate(warfarinLastAppt)}</span></p>
        <p style={styles.mb0}>Last INR: <span style={styles.bold}>{warfarinINR}</span> </p>
        <p style={styles.mb0}>Name of anticoagulation clinic/provider: <span style={styles.bold}>{warfarinClinic}</span> </p>
        <p style={styles.mb0}>Contact number of provider : <span style={styles.bold}>{warfarinClinicContactNo}</span></p>
        <p style={styles.mb0}>Email Address : {warfarinClinicEmail} </p>
        <p >Next appt : <span style={styles.bold}>{formatDate(warfarinNextAppt)}</span></p> 
        </Fragment>
        }   
     </>):<p style={{...styles.mb0,...styles.bold}}>Nil</p>}
    </div>
  )
}

export default Warfarin