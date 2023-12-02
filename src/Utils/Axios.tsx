import axios from "axios"
const contentType={
    "Content-Type":"application/json"
    }

export const Axiosi = axios.create({
    baseURL: 'http://localhost:8000',
    headers:contentType,
    withCredentials:true
    
  })
