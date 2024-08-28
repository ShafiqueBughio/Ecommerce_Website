import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/Context';
import Items from '../Compponents/Items';


const ShopCategory = (props) => {
    const {Product_Data,Handle_Search,query} = useContext(ShopContext);
  return (
    <div>
      <img className='block w-4/5 my-7 mx-auto' src={props.banner} alt="" />
      <div className='flex flex-col sm:flex-row my-0 mx-5 sm:mx-[170px] justify-between items-center text-center sm:text-left lg:px-24 md:px-14 sm:px-10 gap-6'>
  {/* Product Count Section */}
  <div className='flex flex-col items-center sm:items-start gap-4'>
    <p className='sm:mb-0'><span className='font-semibold'>Showing 1-12 </span>out of 36 products</p>

    {/* Sort by Dropdown */}
    <div className='py-[10px] px-[24px] rounded-full border border-gray-500 flex items-center justify-center'>
      Sort by 
      <img className="ml-2" src="src/assets/Ecommerce_Frontend_Assets/dropdown_icon.png" alt="Sort by" />
    </div>
  </div>

  {/* Search Bar */}
  <div className='flex items-center justify-center w-full sm:w-auto md:-mt-14'>
    <div className='relative w-full max-w-[400px]'>
      <input 
        type="search" 
        placeholder='Search products...'
        onChange={Handle_Search}
        value={query}
        className='w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ease-in-out'
      />
      <div className='absolute top-2 left-3 text-gray-500'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
    </div>
  </div>
</div>


      <div className='my-[20px] mx-[20px] flex items-center  justify-center max-sm:justify-start space-x-2 max-sm:space-x-0 flex-wrap'>
        {Product_Data.map((item,index)=>{
            if(props.category===item.category){
               return <Items 
            key={index}
            url={item.image} 
            name={item.name} 
            new_price={item.new_price} 
            old_price={item.old_price} 
            id ={item.id}
          />
            }
            else{
                return null;
            }
        })}
      </div>
      {/* Explore Button  */}
      <div className='flex items-center justify-center mt-32'>
        <button className='bg-gray-200 text-gray-500 border-none outline-none cursor-pointer rounded-full px-4 py-3'>Explore More</button>
      </div>
    </div>
  );
}

export default ShopCategory;
