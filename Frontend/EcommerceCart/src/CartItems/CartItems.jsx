import React from 'react';
import cart_cross_icon from "../assets/Ecommerce_Frontend_Assets/cart_cross_icon.png";
import { useContext } from 'react';
import { ShopContext } from '../context/Context';


const CartItems = () => {
  const { GetTotalCartAmount, cartItems, RemoveFromCart, AddToCart,Product_Data } = useContext(ShopContext);

  return (
    <div className='my-24 mx-4 md:mx-10 lg:mx-[170px]'>
      {/* Header Row */}
      <div className='grid grid-cols-6 gap-4 items-center py-[20px] text-[#454545] text-sm sm:text-[18px] font-semibold'>
        <p className='col-span-1'>Products</p>
        <p className='col-span-1'>Title</p>
        <p className='col-span-1'>Price</p>
        <p className='col-span-1'>Quantity</p>
        <p className='col-span-1'>Total</p>
        <p className='col-span-1'>Remove</p>
      </div>
      <hr className='h-[3px] border-0 bg-gray-200' />

      {/* Cart Items */}
      {Product_Data.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='grid grid-cols-6 gap-4 items-center py-[20px] text-[#454545] font-medium text-xs sm:text-[15px]'>
                <img src={e.image} alt="" className='h-[50px] sm:h-[62px] col-span-1' />
                <p className='col-span-1'>{e.name}</p>
                <p className='col-span-1'>${e.new_price}</p>
                <div className='col-span-1 flex '>
                  <button className='w-6 h-6 sm:h-8 border border-gray-200 bg-white' onClick={() => { RemoveFromCart(e.id) }}>-</button>
                  <button className='w-8 h-6 sm:h-8 border border-gray-200 bg-white'>{cartItems[e.id]}</button>
                  <button className='w-6 h-6 sm:h-8 border border-gray-200 bg-white' onClick={() => { AddToCart(e.id) }}>+</button>
                </div>
                <p className='col-span-1'>${e.new_price * cartItems[e.id]}</p>
                <img className='w-4 h-4 cursor-pointer col-span-1' src={cart_cross_icon} onClick={() => { RemoveFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Summary */}
      <div className='flex flex-col lg:flex-row my-24 gap-8'>
        {/* Cart Total */}
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='text-lg sm:text-2xl font-semibold'>Cart Total</h1>
          <div>
            {/* Subtotal */}
            <div className='flex justify-between py-3'>
              <p>Subtotal</p>
              <p>${GetTotalCartAmount()}</p>
            </div>
            <hr />
            {/* Shipping Fee */}
            <div className='flex justify-between py-3'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            {/* Total */}
            <div className='flex justify-between py-3'>
              <h3 className='text-base sm:text-xl font-semibold'>Total</h3>
              <h3 className='font-semibold'>${GetTotalCartAmount()}</h3>
            </div>
          </div>
          <button className='w-full sm:w-[262px] h-[58px] bg-latest_color text-white text-base sm:text-xl font-semibold cursor-pointer rounded-md hover:bg-red-600 transition-colors'>
            Proceed To Checkout
          </button>
        </div>
        {/* Promo Code */}
        <div className='flex-1 text-base sm:text-xl font-medium'>
          <p className='text-gray-700'>If you have a promo code, Enter it here</p>
          <div className='flex items-center mt-4 h-[58px] bg-gray-200'>
            <input className='flex-grow bg-transparent pl-4 text-base sm:text-xl h-full outline-none' type="text" placeholder='Promo Code' />
            <button className='w-[170px] h-full bg-black text-white'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
