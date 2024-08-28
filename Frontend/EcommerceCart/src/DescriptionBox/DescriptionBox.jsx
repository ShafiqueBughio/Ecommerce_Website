import React from 'react';

const DescriptionBox = () => {
  return (
    <div className='my-12 sm:my-16 lg:my-28 mx-4 sm:mx-16 lg:mx-40'>
      <div className='flex flex-col sm:flex-row cursor-pointer'>
        <div className='flex items-center justify-center text-base sm:text-lg lg:text-xl font-semibold w-full sm:w-[171px] h-12 sm:h-[70px] border border-gray-300'>
          Description 
        </div>
        <div className='flex items-center justify-center text-base sm:text-lg lg:text-xl font-semibold w-full sm:w-[171px] h-12 sm:h-[70px] border border-gray-300 bg-gray-100 text-gray-600'>
          Reviews (122)
        </div>
      </div>

      <div className='flex flex-col gap-4 sm:gap-6 border border-gray-300 p-4 sm:p-8 lg:p-12 pb-8 sm:pb-12 lg:pb-16'>
        <p className='text-sm sm:text-base lg:text-lg'>
          Discover our collection of meticulously crafted products, where quality meets innovation. Each item in our range is thoughtfully designed to enhance your lifestyle, combining superior materials with expert craftsmanship. Whether you're seeking everyday essentials or something special, our products deliver on both style and substance. Enjoy the perfect balance of durability, functionality, and aesthetic appeal, all while knowing that you're investing in items that stand the test of time. Elevate your experience with products that not only meet but exceed your expectations, providing you with unparalleled value and satisfaction.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
