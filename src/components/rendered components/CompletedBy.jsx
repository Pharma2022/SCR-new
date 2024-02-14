import React from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate, singleOrDouble } from '../../helper'
import Title, { Para } from '../Title'
import styles from './RenderStyles'

const CompletedBy = () => {



const {form:{completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments}}=useFormContext()
  
const bold=styles.bold

return (
    <div >
          <p className='' style={{...bold,...styles.underline,...styles.mb0}}>Medication Reconciliation</p>
          <Title notUnderlined={true} >  <span >Completed by :</span>   <span style={bold} >{completedBy}</span></Title>
          <Title notUnderlined={true} >  <span >Reconciled by :</span>   <span style={bold} >{reconciledBy}</span></Title>
          <Title notUnderlined={true}>  <span >Transcribed by :</span>   <span style={bold} >{transcribedBy}</span></Title>
          <p >  <span >Completed at :</span>  <span style={bold}> {dateCompleted&& formatDate(dateCompleted)} {timeCompleted}</span></p>
          <Title className='red' style={styles.red}> Medical Team to Review </Title>
          <Para >{medReviewRequired?"":"No" }</Para>
          <Para > {medReviewRequired? singleOrDouble( medReviewComments):null}   </Para>
          


    </div>
  )
}

export default CompletedBy