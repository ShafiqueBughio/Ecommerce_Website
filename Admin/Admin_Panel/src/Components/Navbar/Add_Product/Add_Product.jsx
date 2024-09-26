import React, { useState } from 'react';
import upload_image from "../../../assets/upload_area.svg"
import { toast } from 'react-toastify';


const Add_Product = () => {

  const [image,setimage] = useState(false);

  
  const image_Handler = (e)=>{
    setimage(e.target.files[0]);
  }
  
  const [Product_detail,Set_Product_detail] = useState({
    name:"",
    image:"",
    category:"men",
    old_price:"",
    new_price:"",
  })
  const Product_Detail_Handler = (e)=>{
    Set_Product_detail({...Product_detail,[e.target.name]:e.target.value});
  }

  //Add Product Fuction 
  const Add_Product = async()=>{
      console.log(Product_detail);

      let response_data;  //response from server

      let Product = Product_detail;

      //FormData is a bulit-in web api useful for sending data including files to server via http request

      //creating object of FormData
      let formData = new FormData();

      formData.append('product',image);

      await fetch("http://localhost:5001/upload",{
        method:'POST',
        headers:{
          Accept:"application/json"
        },
        body:formData
      })
      .then((resp)=>resp.json()).then((data)=>response_data = data);

      if(response_data.status === 200){
        Product.image = response_data.image_url;

        //Add Product into Database

        await fetch("http://localhost:5001/addproduct",{
          method:'POST',
          headers:{
            Accept:"application/json",
            'Content-Type':'application/json'
          },
          body:JSON.stringify(Product)
        })
        .then((resp)=>resp.json()).then((data)=>
       {
        if(data.status === 200){
          toast.success(data.message);
        } 
        else{
          toast.error("Failed to add")
        }
       }
        );
      }
  }

  return (
    <div className='box-border w-full max-w-[800px] py-[38px] px-[50px] my-[16px] mx-[30px] rounded-md bg-white max-md:w-auto max-md:p-7 max-md:m-[20px]'>
    {/* Product Title  */}
    <div className='w-full text-base text-custom_text py-2'>
      <p>Product title</p>
      <input type="text" placeholder='Type here' name='name' value={Product_detail.name} onChange={Product_Detail_Handler} className='box-border w-full h-[50px] rounded pl-[15px] border-[1px] border-border_color text-custom_text outline-none text-sm my-2'/>
    </div>

    {/* Product Price  */}
    <div className='flex gap-10 '>
      {/* Old Price  */}
      <div  className='w-full text-base text-custom_text'> 
        <p>Price</p>
        <input value={Product_detail.old_price} onChange={Product_Detail_Handler} type="text" placeholder='Type here' name='old_price' className='box-border w-full h-[50px] rounded pl-[15px] border-[1px] border-border_color text-custom_text outline-none text-sm my-2' />
      </div>

    {/* New Price  */}
    <div  className='w-full text-base text-custom_text'>
        <p>Offer Price</p>
        <input value={Product_detail.new_price} onChange={Product_Detail_Handler} type="text" placeholder='Type here' name='new_price' className='box-border w-full h-[50px] rounded pl-[15px] border-[1px] border-border_color text-custom_text outline-none text-sm my-2'/>
      </div>

    </div>

    {/* Product Category  */}
    <div  className='w-full text-base text-custom_text'>
      <p>Product Category</p>

      <select value={Product_detail.category} onChange={Product_Detail_Handler} name="category" className=' mt-2 p-[10px] w-[100px] h-[50px] text-sm text-custom_text border-[1px] border-unique_border_color rounded'>
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="kid">Kid</option>
      </select>
    </div>

    {/* Product image  */}
    <div  className='w-full text-base text-custom_text'>
      <label htmlFor="file-input">
      <img  src={image?URL.createObjectURL(image):upload_image} alt="" className='w-[120px] h-[120px] rounded-md object-contain m-[10px] -ml-1 '/>
      </label>
      <input onChange={image_Handler} type="file" name='image' id='file-input' hidden />
    </div>
    {/* Add Product Button  */}
    <button onClick={()=>Add_Product()} className='mt-[20px] w-[160px] h-[50px] rounded-md border-none cursor-pointer text-white text-base font-medium bg-latest_color hover:bg-red-600 transition-colors hover:bg-[linear-gradient(90deg,rgba(100,45,135,1)0%,rgba(200,33,33,1)0%,rgba(202,141,55,1)100%)]'>ADD</button>
    </div>
  );
}

export default Add_Product;
