import React, { useState } from "react";
import Hero from "./Hero";
import Popular from "./Popular";
import Offers from "./Offers";
import New_Collections from "./New_Collections";
import NewsLetter from "./NewsLetter";



function Product(){
    
   
    return(
        <>
        <div>

        <Hero/>
        <Popular/>
        <Offers/>
        <New_Collections/>
        <NewsLetter/>
        
      
        </div>
       
        </>
    )
}
export default Product;