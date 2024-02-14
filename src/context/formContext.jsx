import React,{createContext,useContext} from "react";
import useForm from "../hooks/useForm";

const formState=()=>{
    return useForm()
}

const FormContext=createContext(formState)

export const FormContextProvider=({children})=>{

return (<FormContext.Provider value={useForm()}>

    {children}
</FormContext.Provider>

)
}
export const useFormContext=()=>(useContext(FormContext))