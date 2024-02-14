import React from 'react'
import Sources from '../rendered components/Sources'
import { useFormContext } from '../../context/formContext'

const ClozapineSources = () => {
    
    const {form:{clozapineMonitoringServices,clozapineMonitoringServicesNo,clozapineClinic,clozapineClinicNo}}=useFormContext()
  return (
    <Sources>
        {clozapineMonitoringServices?       <li>Clozapine Monitoring Service: ${clozapineMonitoringServices} tel: {clozapineMonitoringServicesNo}                             </li>:null}
        {clozapineClinic?        (   <li> {`${clozapineClinic} tel: ${clozapineClinicNo}` }                      </li>):null}
    </Sources>
  )
}

export default ClozapineSources