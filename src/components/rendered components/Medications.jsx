import React from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'
import Title, { OrderedList } from '../Title'
const Medications = () => {
    const {regFormat,acuteFormat, form:{ hasRegMeds,hasAcuteMeds,hasOtcMeds,otcMeds},renderedAcuteMeds,renderedRegMeds

}=useFormContext()

const sortAndSplit =(arr)=>    arr.length? arr.length===1? <p>{arr[0]}</p> :arr.split('\n').sort((a, b) => a.localeCompare(b)).map(item=><li key={nanoid()}>{item}</li>):null
 

  return (
    <div>
      
      
        <Title>Regular Medication</Title> 
      {!hasRegMeds? <p>Nil</p>: 
      (regFormat==='scr'||regFormat==='hie')? <p>{renderedRegMeds}</p>
      : regFormat==='freetype'&& 

    <OrderedList>
      {sortAndSplit(renderedRegMeds)}
    </OrderedList>

      }

      

        <Title>Acute Medication</Title>  
        {!hasAcuteMeds? <p>Nil</p>: 
      (acuteFormat==='scr'||acuteFormat==='hie')? <p>{renderedAcuteMeds}</p>
      : acuteFormat==='freetype'&& 

    <OrderedList>
      {sortAndSplit(renderedAcuteMeds)}
    </OrderedList>

      }
        <Title>OTC/Herbal Preparations/Illicit Drugs/Alcohol/Other</Title>   
        {!hasOtcMeds? <p>Nil</p>:null}
        <OrderedList>
       {sortAndSplit(otcMeds)}
          
        </OrderedList> 
  
    </div>
  )
}

export default Medications
