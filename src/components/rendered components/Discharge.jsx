import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'
import DischargePlan from './DischargePlan'
import styles from './RenderStyles'

const Discharge = () => {

const {form:{hasRegMeds,hasAcuteMeds,medsSupply,topUpMeds}}=useFormContext()

const bold=styles.bold
  return (
    <Fragment>

        <Title> Medications for discharge:</Title>

       {(hasRegMeds||hasAcuteMeds)?( <>
        
        {!medsSupply? <span style={bold}>Please Select</span>:""}
       {medsSupply?( <p style={bold}>
            {medsSupply==='ownSupply'? 'Has own supply at home, supply new and changed medicines only'
            :medsSupply==='topUp'? `Has own supply at home but needs the following medicines only ${topUpMeds}`
            :'Supply All'}
            </p >):
            <ul >
              <li>Has own supply at home, supply new and changed medicines only</li>
              <li>Has own supply at home but needs the following medicines only: </li>
              <li>Supply All</li>
            </ul>
            
            }

        
        </>):<p style={{...styles.mb0,...bold}}>Supply All</p>}
        <DischargePlan/>
    </Fragment>
  )
}

export default Discharge