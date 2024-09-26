import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Filter_Product from '../Filter_Product/Filter_Product';



const List_Product = () => {
  const [all_Products,Set_All_Products] = useState([]);

  async function Get_All_Products (){
    await fetch("http://localhost:5001/allproducts")
    .then((resp)=>resp.json())
    .then((data)=>{Set_All_Products(data)});
  }
//this useEffect will invoke when we land on page
useEffect(()=>{
  Get_All_Products();
},[])

//function for Remove button
async function Handle_remove_product (id){
  await fetch("http://localhost:5001/removeproduct",{
    method:'DELETE', 
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({id:id})

  })
  //refresh component data 
  .then((resp)=>resp.json())
  .then((data)=>{
    if(data.status === 200){
       Get_All_Products();
      toast.success(data.message)
    }
    else{
     toast.error("Failed to remove")
    }
  })
}



//filtered items
const [filtered_product,Set_filtered_product] = useState('');



  return (
    <div className='flex flex-col items-center w-full h-[740px] py-[10px] px-[50px] m-[30px] rounded-md bg-white max-md:box-border max-md:w-11/12 max-md:h-full max-md:py-[10px] max-md:px-[30px] max-md:my-[20px] max-md:mx-auto'>


<div className='flex w-full justify-between items-center py-5'>
        <div className='flex-1 text-center'>
          <h1 className='text-2xl font-semibold'>All Products List</h1>
        </div>
        <div className='flex-none'>
         <select  onChange={(e)=>{Set_filtered_product(e.target.value)}}  name="filter" id="">
          <option value="">All {`(${all_Products.length})`}</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
          <option value="women">Women</option>

         </select>
        </div>
      </div>
 
     

      <div className='grid grid-cols-custom-layout gap-[10px] w-full py-[20px] px-0 text-sm font-semibold text-list_color max-md:py[15px] max-md:px-0 max-md:text-xs '>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className='overflow-y-auto h-[500px] w-full'>
 <Filter_Product selectCategory = {filtered_product} all_Products = {all_Products} Handle_remove_product = {Handle_remove_product}/>
      </div>
    </div>
  );
}

export default List_Product;
