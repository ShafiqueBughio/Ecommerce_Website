import React, { useState } from 'react';
//toastify
import { toast} from 'react-toastify';

const Signup = ({Login,Setlogin,Show_Password,Toggle_Show_Password}) => {

    const [FormData,SetFormData] = useState({
        username:"",
        email:"",
        password:"",
    })

 

    function Handle_Signup(e){
        return SetFormData({...FormData,[e.target.name]:e.target.value});
    }

    async function SignUp_Api_Caller(){

      let response_data;    //this contain success ,token

        await fetch("http://localhost:5000/signup",{
            method:"post",
            headers:{
                Accept:"application/form-data",
                  'Content-Type':'application/json'
            },
            body:JSON.stringify(FormData)
        })
        .then((resp)=>resp.json())
        .then((data)=>{
          response_data = data;
        })

        if(response_data.success){
          localStorage.setItem("auth-token",response_data.token);
          toast.success("Account created successfully! Start shopping now.")
         setTimeout(()=>{ window.location.replace("/");},2000)
        }
        
        else{
          alert(response_data.errors)
        }
    }

  return (
    <div className='ml-10'>
      <div className="bg-white shadow-lg rounded-lg sm:p-4 md:p-8 lg:p-8 max-w-sm max-sm:w-11/12  -mt-20 max-sm:py-8">
<h1 className="text-2xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Sign Up</h1>

{/* Input Fields */}
<div className="space-y-4 mb-6 flex items-center justify-center flex-wrap">

<input
    type="text"
    placeholder="Name"
    name = "username"
    onChange={Handle_Signup}
    value={FormData.username}
    className="md:w-full lg:w-full sm:w-4/5  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
  />
  <input
    type="email"
    name = "email"
    onChange={Handle_Signup}
    value={FormData.email}
    placeholder="Email Address"
    className="md:w-full lg:w-full sm:w-4/5  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
  />
  {/* Password  */}
<div className='relative md:w-full'>
<input
    type={Show_Password?"text":"password"}
    name = "password"
    onChange={Handle_Signup}
    value={FormData.password}
    placeholder="Password"
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 pr-12"
  />
  <span onClick={()=>{Toggle_Show_Password()}}  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
    {Show_Password?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

}
  </span>
</div>
</div>

<button className=" md:w-full lg:w-full max-sm:w-3/6 max-sm:ml-20 bg-latest_color text-white py-2 rounded-md hover:bg-red-600 transition-colors hover:bg-[linear-gradient(90deg,rgba(100,45,135,1)0%,rgba(200,33,33,1)0%,rgba(202,141,55,1)100%)]" type='submit' onClick={()=>SignUp_Api_Caller()}>Continue</button>

<p className="text-center text-sm text-gray-600 mt-4">
  Don't have an account? <span className="text-red-600 hover:underline cursor-pointer" onClick={()=>{Setlogin(true)}}>Login here</span>
</p>

<div className="mt-6 flex items-center space-x-2 max-sm:w-4/5 max-sm:ml-10">
  <input
    type="checkbox"
    id="terms"
    className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
  />
  <label htmlFor="terms" className="text-sm text-gray-600">
    By continuing I agree to the <span className=" hover:underline cursor-pointer">terms of use</span> & <span className=" hover:underline cursor-pointer">privacy policy</span>.
  </label>
</div>
</div>
    </div>
  );
}

export default Signup;
