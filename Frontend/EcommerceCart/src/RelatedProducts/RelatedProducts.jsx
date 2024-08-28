import React from 'react';
import data_product from '../assets/Ecommerce_Frontend_Assets/data';
import Items from '../Compponents/Items';
import { useContext } from 'react';
import { ShopContext } from '../context/Context';

const RelatedProducts = ({product}) => {
    const {Product_Data} = useContext(ShopContext) 
    
     const related_products =  Product_Data.filter((item)=>item.category === product.category).slice(0,4)
        
         
  return (
    <div className='p-8 -mt-20'>
      <div className='text-center '>
        <h1 className='text-4xl font-bold mb-2 mt-16 md:text-3xl max-sm:text-2xl'>Related Products</h1>
        <div className='border-b-4  border-gray-500 mx-auto w-32 max-sm:w-24'></div>
      </div>
      <div className='flex flex-wrap max-sm:justify-start justify-evenly space-x-5 max-sm:space-x-0 my-5'>
       {related_products.map((item,index)=>{
        return <Items 
        key={index}
        url={item.image} 
        name={item.name} 
        new_price={item.new_price} 
        old_price={item.old_price} 
        id={item.id}
      />
       })}
      </div>
    </div>
  );
}

export default RelatedProducts;
