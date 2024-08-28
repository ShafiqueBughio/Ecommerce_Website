import React from 'react';

const NewsLetter = () => {
  return (
    <div className='flex items-center justify-center my-14 px-4 '>
      <div className='bg-new_custom-gradient p-8 sm:p-10 md:p-12 lg:p-14 w-full max-w-md sm:max-w-lg lg:max-w-5xl shadow-lg'>
        <div className='text-center mb-6'>
          <h1 className='text-2xl sm:text-3xl font-semibold pb-2'>Get Exclusive Offers On Your Email</h1>
          <p className='text-base sm:text-xl text-gray-700'>Subscribe to our newsletter and stay updated</p>
        </div>
        <div className='flex flex-col sm:flex-row justify-center py-2'>
          <input 
            className='px-4 py-2 w-full sm:w-auto border-gray-300 border outline-none rounded-l-3xl text-gray-700 font-poppins text-base sm:text-lg max-sm:rounded-3xl ' 
            type="email" 
            placeholder='Your Email Address' 
          />
          <button 
            className='px-6 py-2  sm:mt-0 md:rounded-r-3xl lg:rounded-r-3xl max-sm:rounded-3xl max-sm:mt-2  bg-black text-white text-base sm:text-xl cursor-pointer'
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
