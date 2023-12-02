import {Axiosi } from "../Utils/Axios";
import {  toast } from 'react-toastify';



export const PostData=async(datas:string|number):Promise<string>=>{
    try{
  const {data}=await  Axiosi.post('/submitform',datas)
  return data
    }catch(e){
       
        throw  toast("Something went Wrong")
    }
}