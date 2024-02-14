import { useState,useEffect } from "react"
import { sortMyMeds, sortInputHie} from "../helper"


import { emptyForm } from "../data/consts"

const useForm = () => {


    const [form,setFormData]=useState(emptyForm)
    const {
        
        SCR,SCRupdated,patient,eTTA,eTTADate,pods,carer,nursingHome,GP,chemist,regMeds,acuteMeds,
        discrepancies,isDosette,
        hasWarfarin,hasOpioidReplacement,hie}=form
    
    
        const [renderedRegMeds,setRenderedRegMeds]= useState(regMeds)
        
        const [renderedAcuteMeds,setRenderedAcuteMeds]= useState(acuteMeds)

        const [regFormat,SetRegMedsFormat]=useState('scr')
        const [acuteFormat,setAcuteMedsFormat]=useState('scr')



        const clearRenderedRegMeds=()=>setRenderedRegMeds('')
        const clearRenderedAcuteRegMeds=()=>setRenderedAcuteMeds('')
        const formatregSCR=()=>{
            clearRenderedRegMeds()
            SetRegMedsFormat('scr')}
        const formatregHie=()=>{
            clearRenderedRegMeds()
            SetRegMedsFormat('hie')
        }
        const formatregFreetype=()=>{
            clearRenderedRegMeds()
            SetRegMedsFormat('freetype')}


        const formatAcuteSCR=()=>{
                clearRenderedAcuteRegMeds()
                setAcuteMedsFormat('scr')}
        
        const formatacuteHie=()=>{
            clearRenderedAcuteRegMeds()
            setAcuteMedsFormat('hie')
        }
        const formatAcuteFreetype=()=>{
                clearRenderedAcuteRegMeds()
                setAcuteMedsFormat('freetype')}

    const resetForm=()=>setFormData(emptyForm)
     const sortRegMeds=()=>{
        //  setRenderedRegMeds(sortRepeats(regMeds))
        setRenderedRegMeds(sortMyMeds(regMeds,true))

    }
     const sortRegHieMeds=()=>{
        setRenderedRegMeds(sortInputHie(regMeds))
     }
     const sortAcuteHieMeds=()=>{
        setRenderedAcuteMeds(sortInputHie(acuteMeds,true))
     }
     const sortAcuteMeds=()=>{
        setRenderedAcuteMeds(sortMyMeds(acuteMeds,false))    
        
    }       

    useEffect(()=>{
        !discrepancies&&setFormData(prev=>({...prev,newMeds:"",withheld:"",changed:""}))
    },[discrepancies])

    useEffect(()=>{
        setFormData(prev=>({...prev,regMeds:""}))
    },[regFormat])
    useEffect(()=>{
        setFormData(prev=>({...prev,acuteMeds:""}))
    },[acuteFormat])
    useEffect(()=>{
        setRenderedRegMeds(regMeds)
    },[regMeds])
    
    useEffect(()=>{
        setRenderedAcuteMeds(acuteMeds)
    },[acuteMeds])

    useEffect(()=>{
     setFormData(prev=>({...prev,SCRupdated:""}))   
    },[SCR])
    useEffect(()=>{
        setFormData(prev=>({...prev,eTTADate:""}))   
       },[eTTA])
    useEffect(()=>{
        setFormData(prev=>({...prev,lastSupplyDate:""}))   
       },[isDosette])
    useEffect(()=>{
    setFormData(prev=>({...prev,warfarinLastAppt:"",warfarinNextAppt:""}))   
    },[hasWarfarin])

    useEffect(()=>{
        setFormData(prev=>({...prev,lastOpioidSupply:""}))   
        },[hasOpioidReplacement])




    const  handleChange=(e)=> {
      const {name, value, type, checked} = e.target
      setFormData(prev => ({
              ...prev,
              [name]: type === "checkbox" ? checked : value
          })
      )
  
      

  }
  const checkboxesArray=[

    {name:"SCR",
    value:SCR,
    title:"SCR",
    isDate:false,
    conditional:null    
},
{name:"SCRupdated",
value:SCRupdated,
title:"SCR last updated",
isDate:true,
conditional:SCR    
},
{name:"patient",
value:patient,
title:"Patient",
isDate:false,
conditional:null  
},
{name:"eTTA",
value:eTTA,
title:"TTA",
isDate:false,
conditional:null    
},
{name:"eTTADate",
value:eTTADate,
title:"TTA Date",
isDate:true,
conditional:eTTA   
},
{name:"pods",
value:pods,
title:"Pods",
isDate:false,
conditional:null    
},



{name:"chemist",
value:chemist,
title:"Community Pharmacy",
isDate:false,
conditional:null    
},



]
  return {checkboxesArray,handleChange, form,resetForm,setFormData,sortAcuteMeds,sortRegMeds
    ,acuteFormat,regFormat,renderedAcuteMeds,renderedRegMeds,
    formatregFreetype,formatregSCR,formatAcuteFreetype,formatAcuteSCR,
    formatacuteHie,formatregHie,sortRegHieMeds,sortAcuteHieMeds}
}

export default useForm