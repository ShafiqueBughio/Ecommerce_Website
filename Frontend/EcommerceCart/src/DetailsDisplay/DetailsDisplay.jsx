import React from 'react';
import star_icon from "../assets/Ecommerce_Frontend_Assets/star_icon.png";
import star_dull_icon from "../assets/Ecommerce_Frontend_Assets/star_dull_icon.png";
import { useContext } from 'react';
import { ShopContext } from '../context/Context';

const DetailsDisplay = ({ product }) => {
  const { AddToCart, cartItems } = useContext(ShopContext);

  function Handle_Add_To_Cart(){
    return AddToCart(product.id)
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 my-8 sm:my-12 lg:my-16 px-4 sm:px-16 lg:px-32">
      {/* Left Side Div */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex sm:flex-row lg:flex-col gap-4 sm:gap-4 items-center justify-center">
          <img className="w-20 sm:w-28 lg:w-32 h-20 sm:h-full lg:h-32 object-cover cursor-pointer hover:opacity-80" src={product.image} alt="Product Thumbnail" />
          <img className="w-20 sm:w-28 lg:w-32 h-20 sm:h-full lg:h-32 object-cover cursor-pointer hover:opacity-80" src={product.image} alt="Product Thumbnail" />
          <img className="w-20 sm:w-28 lg:w-32 h-20 sm:h-full lg:h-32 object-cover cursor-pointer hover:opacity-80" src={product.image} alt="Product Thumbnail" />
          <img className="w-20 sm:w-28 lg:w-32 h-20 sm:h-full lg:h-32 object-cover cursor-pointer hover:opacity-80" src={product.image} alt="Product Thumbnail" />
        </div>
        {/* Main Product Image */}
        <div>
          <img className="w-full h-full object-cover" src={product.image} alt="Product" />
        </div>
      </div>

      {/* Right Side Div */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 lg:w-1/2">
        <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>

        {/* Star Rating */}
        <div className="flex items-center gap-1">
          <img src={star_icon} alt="star" className="w-4 sm:w-5 h-4 sm:h-5" />
          <img src={star_icon} alt="star" className="w-4 sm:w-5 h-4 sm:h-5" />
          <img src={star_icon} alt="star" className="w-4 sm:w-5 h-4 sm:h-5" />
          <img src={star_icon} alt="star" className="w-4 sm:w-5 h-4 sm:h-5" />
          <img src={star_dull_icon} alt="star" className="w-4 sm:w-5 h-4 sm:h-5" />
          <p className="text-gray-600 ml-1 sm:ml-2">(12)</p>
        </div>

        {/* Prices */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-lg sm:text-xl text-gray-500 line-through">${product.old_price}</div>
          <div className="text-xl sm:text-2xl text-red-500 font-semibold">${product.new_price}</div>
        </div>

        {/* Description */}
        <div className="text-gray-700 text-sm sm:text-base">
          Discover our premium-quality product, crafted with precision to meet your needs. Perfect for everyday use, it combines durability with style, offering unbeatable value. Elevate your experience with a product designed to exceed expectations.
        </div>

        {/* Select Size */}
        <div>
          <h2 className="text-md sm:text-lg font-semibold mb-2">Select Size</h2>
          <div className="flex gap-2 sm:gap-4">
            <div className="border border-gray-300 px-2 py-1  cursor-pointer hover:bg-latest_color hover:text-white font-semibold">S</div>
            <div className="border border-gray-300 px-2 py-1  cursor-pointer hover:bg-latest_color hover:text-white font-semibold">M</div>
            <div className="border border-gray-300 px-2 py-1  cursor-pointer hover:bg-latest_color hover:text-white font-semibold">L</div>
            <div className="border border-gray-300 px-2 py-1  cursor-pointer hover:bg-latest_color hover:text-white font-semibold">XL</div>
            <div className="border border-gray-300 px-2 py-1  cursor-pointer hover:bg-latest_color hover:text-white font-semibold">XXL</div>
          </div>
        </div>

        <button className="bg-latest_color text-white px-4 sm:px-6 py-2 sm:py-3 w-32 sm:w-40 rounded-md hover:bg-red-600 transition-colors hover:bg-[linear-gradient(90deg,rgba(100,45,135,1)0%,rgba(200,33,33,1)0%,rgba(202,141,55,1)100%)]" onClick={()=>{localStorage.getItem('auth-token')?Handle_Add_To_Cart():window.location.replace("/login")}}>ADD TO CART</button>

        <div className="text-gray-600 mt-2 sm:mt-4">
          <p><span className="font-semibold">Category: </span>{product.category}, T-Shirt, Crop Top</p>
          <p><span className="font-semibold">Tags: </span>Modern, Latest</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsDisplay;
