import React, { useEffect, useState } from 'react';
import Items from '../Compponents/Items';

const Popular = () => {
  const [popular_women,Set_Popular_Women] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5001/popular")
    .then((resp)=>resp.json())
    .then((data)=>{
      Set_Popular_Women(data);
    })
  },[])
  return (
    <div className='p-8'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl md:text-3xl font-bold mb-2 mt-16 max-sm:text-2xl'>POPULAR IN WOMEN</h1>
        <div className='border-b-4 border-gray-500 mx-auto w-32'></div>
      </div>
      <div className='flex  justify-center max-sm:justify-start max-sm:space-x-0 space-x-5 max-sm:flex-wrap sm:flex-wrap '>
        {popular_women.map((item, index) => (
          <Items 
            key={index}
            url={item.image} 
            name={item.name} 
            new_price={item.new_price} 
            old_price={item.old_price} 
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;