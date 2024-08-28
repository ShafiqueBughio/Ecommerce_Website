import React from 'react';

const Offers = () => {
  return (
    <div className='bg-new_custom-gradient flex flex-col lg:flex-row md:flex-row items-center justify-center p-4 md:p-8 lg:p-10 mx-8 md:mx-24 lg:mx-36 my-14'>
      {/* Left Side */}
      <div className='flex flex-col text-center lg:text-left pb-3 lg:pb-0 w-full lg:w-1/2 max-sm:p-4'>
        <h1 className='text-3xl md:text-3xl lg:text-5xl font-semibold mb-2'>Exclusive</h1>
        <h1 className='text-3xl md:text-3xl lg:text-5xl font-semibold mb-2'>Offers For You</h1>
        <p className='text-xs md:text-md lg:text-lg font-semibold lg:mb-4 md:mb-4 mb-4'>ONLY ON BEST SELLERS PRODUCT</p>
        <button className='bg-red-500 text-white rounded-3xl py-2 px-4 lg:w-32 md:w-32 w-32 text-sm mx-auto lg:mx-0'>Check Now</button>
      </div>
      {/* Right Side */}
      <div className='flex justify-end w-full lg:w-1/2 sm:w-1/2 sm:flex'>
        <img 
          className='w-1/2 lg:w-1/2 h-auto object-cover max-sm:hidden' 
          src="src/assets/Ecommerce_Frontend_Assets/exclusive_image.png" 
          alt="Exclusive Offers" 
        />
      </div>
    </div>
  );
}

export default Offers;
