import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/Context';
import BreadCrum from '../Bread_Crum/BreadCrum';
import DetailsDisplay from '../DetailsDisplay/DetailsDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

const Detail = () => {
  const { Product_Data } = useContext(ShopContext); // actual data
  const { detailId } = useParams(); // user pass in url 
  
  // Ensure detailId is a number if e.id is a number
  const Product_Detail = Product_Data.find((e) => e.id === Number(detailId));
  


  return (
    <div>
      <BreadCrum product={Product_Detail} />
      <DetailsDisplay product = {Product_Detail}/>
      <DescriptionBox/>
      <RelatedProducts product = {Product_Detail}/>
    </div>
  );
}

export default Detail;
