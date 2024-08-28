import React from 'react';
import instagram_icon from "../assets/Ecommerce_Frontend_Assets/instagram_icon.png";
import pintester_icon from "../assets/Ecommerce_Frontend_Assets/pintester_icon.png";
import whatsapp_icon from "../assets/Ecommerce_Frontend_Assets/whatsapp_icon.png";
import logo_big from "../assets/Ecommerce_Frontend_Assets/logo_big.png";

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-12 mt-16 px-4 md:px-8 lg:px-16'>
      {/* Footer Logo */}
      <div className='flex items-center gap-4 md:gap-6'>
        <img src={logo_big} alt="Logo" className='w-20 md:w-24 lg:w-32' />
        <p className='text-gray-700 text-3xl md:text-4xl lg:text-5xl'>SHOPPER</p>
      </div>
      <ul className='flex flex-wrap gap-6 text-gray-700 text-sm md:text-lg lg:text-xl cursor-pointer '>
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* Footer Social Icons */}
      <div className='flex gap-4 md:gap-6'>
        <div className='p-2 bg-slate-100 border border-gray-200 rounded-full'>
          <img src={instagram_icon} alt="Instagram" className='w-6 md:w-8' />
        </div>
        <div className='p-2 bg-slate-100 border border-gray-200 rounded-full'>
          <img src={pintester_icon} alt="Pintester" className='w-6 md:w-8' />
        </div>
        <div className='p-2 bg-slate-100 border border-gray-200 rounded-full'>
          <img src={whatsapp_icon} alt="WhatsApp" className='w-6 md:w-8' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-4 w-full mb-4 text-gray-900 text-base md:text-xl'>
        <hr className='w-3/4 md:w-2/3 border-none rounded-lg h-1 bg-gray-400'/>
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
