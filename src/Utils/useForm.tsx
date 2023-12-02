import { useState } from "react";

export const useForm=(initialState:any)=>{
    const [state,setState]=useState<any>(initialState)
    const setForm=(event:any)=>{
        setState({...state,[event.target.name]:event.target.value})
    }
        return[state,setForm]
}