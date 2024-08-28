import React from "react";
import { Link } from "react-router-dom";


function Items({url,name,new_price,old_price,id}) {
 

  return (
    <div className="max-w-xs max-sm:w-2/4  md:w-1/4 lg:w-1/5  p-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-40 py-4 ">
      <div className="rounded-sm overflow-hidden shadow-lg bg-white">
       <Link to={`/detail/${id}`}> <img onClick={window.scrollTo(0,0)} className="w-full h-auto object-cover" src={url} alt={name} /></Link>
        <div className="px-4 py-2">
          <h4 className="text-sm mb-2 ">{name}</h4>
          <div className="flex items-center justify-start ">
            <span className="text-gray-700 text-base font-semibold">${new_price}</span>
            <span className="text-gray-500 text-base line-through px-3 text-[14px]">${old_price}</span>
          </div>
        </div>
        <div className="px-4 py-2 flex justify-center">
         
        </div>
      </div>
    </div>
  );
}

export default Items;
