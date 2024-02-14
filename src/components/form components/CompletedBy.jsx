import React from 'react'
import { useFormContext } from '../../context/formContext'
import TextInput from '../form elements/TextInput'
import FormDate from '../form elements/Date'
import Time from '../form elements/Time'
import TextArea from '../form elements/TextArea'
import { YesNoRadio } from '../form elements/Radios'
import Title from '../Title'
const CompletedBy = () => {
    const {form}=useFormContext()
    const {completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments}=form
  
    const Styles='flex-row space-between align-center'
    return (
    <>
          <Title>Medicines Reconciliation</Title>
          <div className="flex-col w-70">
         <TextInput className={Styles}     name='completedBy'     value={completedBy}    title='Completed by'/>
         <TextInput className={Styles}     name='reconciledBy'    value={reconciledBy}   title='Reconciled by'/>
         <TextInput className={Styles}     name='transcribedBy'   value={transcribedBy}  title='Transcribed by'/>
         <FormDate  className={Styles}     name='dateCompleted'   value={dateCompleted}  title='Date Completed'/>
         <Time      className={Styles}     name='timeCompleted'   value={timeCompleted}  title='Time Completed'/>   
               </div>     
         <YesNoRadio     label={<p className='bold underline red'>Medical Team to Review</p>} no=' Nothing'
                         name='medReviewRequired' value={medReviewRequired}   >
              <TextArea  name='medReviewComments' value={medReviewComments}/>
         </YesNoRadio>
         <p className='bold underline left'>Drug History </p>
    </>
  )
}

export default CompletedBy