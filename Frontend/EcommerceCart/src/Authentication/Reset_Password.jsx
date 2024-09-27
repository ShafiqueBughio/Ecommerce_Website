import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Reset_Password = () => {
  const { userId, token } = useParams();

  // Show Password Functionality
  const [Show_Password_new, Set_Show_Password_new] = useState(false);
  const [Show_Password_confirm, Set_Show_Password_confirm] = useState(false);

  function Toggle_Show_Password() {
    Set_Show_Password_new(!Show_Password_new);
  }
  function Toggle_Show_Password_Confirm() {
    Set_Show_Password_confirm(!Show_Password_confirm);
  }

  const [formData, SetFormData] = useState({
    New_password: "",
    Confirm_password: "",
  });

  function Handle_Reset_Password(e) {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function Reset_Api_Caller() {
    

   const response_data =  await axios.post(`https://ecommerce-website-backend-zeta.vercel.app/${userId}/${token}`,formData, {
  
      headers: {
        Accept: "application/form-data",
        'Content-Type': 'application/json',
      },
    withCredentials:true,
    })
  

    if (response_data.success) {
      toast.success(`Password Reset Successfully`);
      setTimeout(() => { window.location.replace("/login") }, 1000);
    } else {
      toast.error(response_data.errors);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-gray-100"
       >
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-xs sm:max-w-md  w-full sm:w-4/5 md:w-3/4 lg:w-2/5">
          <h1 className="text-2xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Reset Password
          </h1>

          {/* Input Fields */}
          <div className="space-y-4 mb-6 flex flex-col items-center justify-center">

            {/* New Password Input */}
            <div className="relative w-full">
              <input
                type={Show_Password_new ? "text" : "password"}
                placeholder="New Password"
                name="New_password"
                value={formData.New_password}
                onChange={Handle_Reset_Password}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <span
                onClick={Toggle_Show_Password}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              >
                {Show_Password_new ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </span>
            </div>

            {/* Confirm Password Input */}
            <div className="relative w-full">
              <input
                type={Show_Password_confirm ? "text" : "password"}
                placeholder="Confirm Password"
                name="Confirm_password"
                value={formData.Confirm_password}
                onChange={Handle_Reset_Password}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <span
                onClick={Toggle_Show_Password_Confirm}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              >
                {Show_Password_confirm ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={Reset_Api_Caller}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold py-2 px-8 rounded-md shadow-lg focus:outline-none hover:scale-105 transition-transform duration-200"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset_Password;
