import React from 'react'
import CompletedBy from './form components/CompletedBy'
import Sources from './form components/Sources'
import { useFormContext } from '../context/formContext'
import TextInput from './form elements/TextInput'
import CheckBox from './form elements/CheckBox'
import FormAccordion from './form elements/FormAccordion'
import Allergies from './form components/Allergies'
import Smoking from './form components/Smoking'
import DischargePlan from './form components/DischargePlan'

const ClozapineForm = () => {
    const {form:{ clozapineMonitoringServices,clozapineMonitoringServiceNo,clozapineClinic,clozapineClinicNo, }}=useFormContext()
  return (
    <form className='form container'>
        <CompletedBy/>
        <Sources>
          
            <CheckBox name={'clozapineMonitoringServices'} value={clozapineMonitoringServices} title={'Clozapine Monitoring Service'}/>
                {clozapineMonitoringServices&&
                    <TextInput className={'mt-0'} name={'clozapineMonitoringServiceNo'} value={clozapineMonitoringServiceNo} title={'Contact no'}/>}
                    <CheckBox name={'clozapineClinic'} value={clozapineClinic} title={'Clozapine Clinic'}/>
                    {clozapineClinic&&
                    <TextInput className={'mt-0'} name={'clozapineClinicNo' } value={clozapineClinicNo} title={'enter contact no...'} />
                    }
        </Sources>
        <Allergies/>
        <Smoking isClozapine={true}/>
        <FormAccordion title={'Discharge'}>
        <DischargePlan/>   
        </FormAccordion>         

    </form>
  )
}

export default ClozapineForm