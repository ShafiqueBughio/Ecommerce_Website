import React from 'react';
import arrow_icon from "../assets/Ecommerce_Frontend_Assets/breadcrum_arrow.png"


const BreadCrum = ({ product }) => {
  // Ensure product is defined and has the necessary properties


  return (
    <div className='flex items-start justify-start gap-2 text-xl lg:mx-32  my-10 md:mx-20 md:text-base max-sm:text-sm max-sm:ml-4'>
      HOME
      <img src={arrow_icon} alt="arrow" className=' md:pt-[4px] md:h-5 max-sm:pt-[3px] max-sm:h-4' />
      <div className='max-sm:hidden'>SHOP</div>
      <img src={arrow_icon} alt="arrow" className=' md:pt-[4px] md:h-5 max-sm:pt-[3px] max-sm:h-4 max-sm:hidden'  />
      {product.category}
      <img src={arrow_icon} alt="arrow" className=' md:pt-[4px] md:h-5 max-sm:pt-[3px] max-sm:h-4' />
      {product.name}
    </div>
  );
}

export default BreadCrum;
