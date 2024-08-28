import React from 'react';
import Remove_icon from "./../../../assets/cross_icon.png"

const Filter_Product = ({selectCategory,all_Products,Handle_remove_product}) => {
  return  (
    <div>
      <hr />
      {all_Products.map((product, index) => {
        if (product.category === selectCategory || selectCategory === '') {
          return (
        <>
            <div key={index} className='grid grid-cols-custom-layout gap-[10px] w-full py-[20px] px-0 text-sm text-list_color items-center font-medium'>
              <img src={product.image} alt="product-image" className='h-[80px] max-md:h-[60px]' />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={() => Handle_remove_product(product.id)} src={Remove_icon} alt="remove-icon" className='cursor-pointer m-auto' />
           
            </div>
            <hr/>
        </>
            
          );
        } else {
          return null;
        }
      })}
     
    </div>
  );
    
}

export default Filter_Product;
