import React from 'react';
import { Link } from 'react-router-dom';
import add_product_icon from "../../../assets/Product_Cart.svg"
import list_product_icon from "../../../assets/Product_list_icon.svg"

const Sidebar = () => {
  return (
    <div className='flex flex-col pt-[30px] gap-5 w-full max-w-64 h-screen bg-white max-sm:flex-row max-sm:py-[30px] max-sm:px-0 max-sm:w-full max-sm:max-w-none max-sm:h-auto max-sm:justify-center max-md:flex-row max-md:py-[30px] max-md:px-0 max-md:w-full max-md:max-w-none max-md:h-28  max-md:justify-center'>
        
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className='flex items-center justify-center my-0 mx-5 py-3 px-[10px] rounded-md bg-custom-bg gap-5 cursor-pointer max-sm:m-0'>
        <img src={add_product_icon} alt="add product" />
        <p>Add Product</p>
      </div>
      </Link>

      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className='flex items-center justify-center my-0 mx-5 py-3 px-[10px] rounded-md bg-custom-bg gap-5 cursor-pointer max-sm:m-0'>
        <img src={list_product_icon} alt="add product" />
        <p>Product List</p>
      </div>
      </Link>
    </div>
  );
}

export default Sidebar;
