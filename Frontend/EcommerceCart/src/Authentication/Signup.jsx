import React, { useState } from 'react';

const Signup = ({Login,Setlogin}) => {

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
          window.location.replace("/");
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
  <input
    type="password"
    name = "password"
    onChange={Handle_Signup}
    value={FormData.password}
    placeholder="Password"
    className="md:w-full lg:w-full sm:w-4/5  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
  />
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
