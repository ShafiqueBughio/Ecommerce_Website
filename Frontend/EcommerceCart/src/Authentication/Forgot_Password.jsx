import React from 'react';
import { useState } from 'react';
import { toast} from 'react-toastify';
import axios from 'axios';

const Forgot_Password = () => {

    const [formData,SetFormData] = useState({
        email:"",
        
      })

    function Handle_Forgot(e){
        SetFormData({...formData,[e.target.name]:e.target.value});
      }

      axios.defaults.withCredentials = true;
    
      async function Forgot_Api_Caller(){
        
    
       const response_data =  await axios.post("https://ecommerce-website-backend-pink.vercel.app/forgot",formData,{
          
          headers:{
            Accept:"application/form-data",
             'Content-Type':'application/json'
          },

        })
       
    
        if(response_data.success){
          
          
          toast.success(`Check your Gmail to reset password`);
         // Delay of 1 second (1000 milliseconds)
         setTimeout(()=>{window.location.replace("/login")},1000)
        }
        else{
        toast.error(response_data.errors);
        }
      }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white shadow-lg rounded-lg sm:p-4 md:p-8 lg:p-8 max-w-sm max-sm:w-4/5  -mt-20 max-sm:py-8">
      <h1 className="text-2xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Forgot Password</h1>
        
        <input type="email"
        placeholder='Email Address'
        name='email'
        onChange={Handle_Forgot}
        value={formData.email}
          className="md:w-full lg:w-full sm:w-4/5  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
         />

         <br/><br/>
           <button className=" md:w-full lg:w-full max-sm:w-3/6 max-sm:ml-20 bg-latest_color text-white py-2 rounded-md hover:bg-red-600 transition-colors hover:bg-[linear-gradient(90deg,rgba(100,45,135,1)0%,rgba(200,33,33,1)0%,rgba(202,141,55,1)100%)]"onClick={()=>{
            Forgot_Api_Caller()
           }} >Continue</button>
      </div>
    </div>
  );
}

export default Forgot_Password;
