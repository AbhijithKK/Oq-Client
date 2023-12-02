import React from 'react'
import './Register.css'
import { useForm } from '../../Utils/useForm'
import { PostData } from '../../Api/Api'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
   const[value,setForm]= useForm({
    fullName:"",
    mobNumber:"",
    email:"",
    compName:"",
    workShop:""
   })

    
   const FormSubmit=async()=>{
    if (value.fullName.trim()&&value.mobNumber.trim()&&value.email.trim()&&value.compName.trim()&&value.workShop!=='h') {
        const data:any=await PostData(value)
        console.log();
        
        if (data?.message[0]==='true') {
          toast("Data added successfully");
        }else{
          toast(data.message[0])
        }
        
        
    }else{
        console.log('error');
        
    }
   }
  return (
    <div className='Register-container'>
      <div>
        
        <ToastContainer />
      </div>
        <div className="text">
            <h1 style={{textAlign:'center',paddingTop:'20px',color:'white'}}>Register to Attend</h1>
        </div>
      <div className="form">
        <input type="text" name="fullName" id="" placeholder='Full Name'onChange={(e)=>setForm(e)} value={value?.fullName} />
        <input type="tel" name="mobNumber" placeholder="Mobile" onChange={(e)=>setForm(e)} value={value?.mobNumber} />
        <input type="email" name="email" placeholder="Email" onChange={(e)=>setForm(e)} value={value?.email} />
        <input type="text" name="compName" placeholder="Company Name" onChange={(e)=>setForm(e)} value={value?.compName} />
        
        <select placeholder='select one' name='workShop' onChange={(e)=>setForm(e)} value={value?.workShop}>
            <option hidden value='h'>Select WorkShop</option>
            <option value="w1">WorkShop1</option>
            <option value="w2">WorkShop1</option>
            <option value="w3">WorkShop1</option>
            <option value="w4">WorkShop1</option>
            
        </select>
        
      </div>
      <div className="subBtn">
        <button type='button' onClick={FormSubmit}>submit</button>
      </div>
    </div>
  )
}

export default Register
