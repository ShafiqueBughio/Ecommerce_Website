import React, { useEffect, useState } from 'react';
import Items from '../Compponents/Items';

const New_Collections = () => {
  const [new_collections,Set_New_Collections] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/newcollections")
    .then((resp)=>resp.json())
    .then((data)=>Set_New_Collections(data));
  },[])

  return (
   <div className='p-4'>
    <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold mb-2 mt-16 md:text-3xl max-sm:text-2xl'>NEW COLLECTIONS</h1>
        <div className='border-b-4 border-gray-500 mx-auto w-32'></div>
      </div>
     <div className='flex flex-wrap justify-center max-sm:justify-start max-sm:space-x-0 space-x-2'>
      {new_collections.map((item,i)=>{
        return <Items  key={i}
        url={item.image} 
        name={item.name} 
        new_price={item.new_price} 
        old_price={item.old_price}
        id = {item.id}  />
      })}
    </div>
   </div>
  );
}

export default New_Collections;
