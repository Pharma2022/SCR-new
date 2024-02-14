import React from 'react'
import { RadioLabel,CustomRadio } from '../form elements/Radios'
import TextInput from '../form elements/TextInput'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'

const DischargePlan = () => {
    const {form:{dischargePlan,dischargeDestination}}=useFormContext()

    const dischargePlanArr=[
      {value:'ownHome',title:'Own Home'},
      {value:'nursingHome',title:'Nursing Home (supply original packs only for discharge)'},
      {value:'notKnown',title:'Not known on Admission'},
      {value:'other',title:'Other (please specify)'}


    ]



  return (
    <>
    <RadioLabel className={'format flex-col'} label={<p className='bold underline'>Discharge Plan </p>}>
        {dischargePlanArr.map(({value,title})=><CustomRadio key={nanoid()} name={'dischargePlan'} property={dischargePlan} value={value} title={title}/>)
        }
    </RadioLabel>
    {dischargePlan==='other'&&
    <TextInput  name='dischargeDestination'   value={dischargeDestination} title={'Destination: '} />
    }
    </>
  )
}

export default DischargePlan