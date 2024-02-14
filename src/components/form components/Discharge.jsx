import React from 'react'
import { useFormContext } from '../../context/formContext'
import { RadioLabel,CustomRadio } from '../form elements/Radios'
import TextInput from '../form elements/TextInput'
const Discharge = () => {

const {form:{medsSupply,topUpMeds}}=useFormContext()




  return (
    <>
        <RadioLabel className={'format'} label={<p className='bold underline left '>Medicines for discharge</p>} col={true}>
            
            
            <CustomRadio  
                name='medsSupply'   
                value='ownSupply' 
                property={medsSupply} 
                title={'Has own supply at home, supply new and changed medicines only'}   />
            <CustomRadio  
                name='medsSupply'   
                value='topUp'     
                property={medsSupply} 
                title={'Has own supply at home but needs the following medicines only (please list)'}   />
            <CustomRadio  
                name='medsSupply'   
                value='supplyAll'  
                property={medsSupply} 
                title={'Supply all medicines'}    />
                   </RadioLabel>
        {medsSupply==='topUp'&&
        <TextInput  name='topUpMeds' 
                    value={topUpMeds} 
                    title='Specify'       
                    placeholder='Specify'/>     
                      }
    </>
  )
}

export default Discharge