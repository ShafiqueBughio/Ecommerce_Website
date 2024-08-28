import React from 'react';
import nav_logo from "../../assets/nav-logo.svg";
import nav_profile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-4 sm:px-8 md:px-16 bg-white shadow-custom-shadow mb-[2px]'>
      <img src={nav_logo} alt="NavLogo" className='w-32 md:w-48' />
      <img src={nav_profile} alt="NavProfile" className='w-16 md:w-24' />
    </div>
  );
}

export default Navbar;
