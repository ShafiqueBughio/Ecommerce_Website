
import React, { useEffect } from "react";
import { createContext,useState } from "react";


export const ShopContext = createContext(null);






export const Shop_Context_Provider = (props)=>{
 

  const GetDefaultCart = ()=>{
    let cart = {};
    for(let index = 0 ;index<300+1;index++){
      cart[index] = 0;
    }
    return cart
  }



const [Product_Data,SetProductData] = useState([]);

const [cartItems,SetCartItems] = useState(GetDefaultCart());

const [query,Set_Querry] = useState("");

const [Querry_Data,Set_Querry_Data] = useState([]);

function Handle_Search(e){
  let value = e.target.value;
  Set_Querry(value);
}

// UseEffect for all products mount on screen
useEffect(()=>{
  fetch("http://localhost:5001/allproducts")
  .then((resp)=>resp.json())
  .then((data)=>SetProductData(data));
},[])

 // Handle search functionality
 useEffect(() => {
  if (query) {
    // If there is a query, fetch the searched products
    fetch(`http://localhost:5001/searchproducts?q=${query}`)
      .then((resp) => resp.json())
      .then((data) => Set_Querry_Data(data));
  } else {
    // If query is empty, reset to show all products
    Set_Querry_Data([]); // Reset search data
  }
}, [query]);





//Get Cart Data
useEffect(()=>{
  if(localStorage.getItem('auth-token')){
    fetch("http://localhost:5001/cartData",{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':"application/json",
      },
      body:""
    })
    .then((resp)=>resp.json())
    .then((data)=>{
      SetCartItems(data);
    })
  }
},[])





const AddToCart = (ItemId)=>{
SetCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))

//check is user authenticate or not 
if(localStorage.getItem('auth-token')){
  fetch("http://localhost:5001/AddToCart",{
    method:"POST",
    headers:{
      Accept:"application/form-data",
      'auth-token':`${localStorage.getItem('auth-token')}`,
      'Content-Type':"application/json"
    },
    body:JSON.stringify({"itemId":ItemId})
  })
  .then((resp)=>resp.json())
  .then((data)=>{
   if(data){
    console.log(data)
   }
  })
}

}


const RemoveFromCart = (ItemId)=>{
  SetCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
 
    if(localStorage.getItem('auth-token')){
      fetch("http://localhost:5001/removeCart",{
        method:"DELETE",
        headers:{
          Accept:"application/form-data",
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':"application/json",
        },
        body:JSON.stringify({"itemId":ItemId})
      })
      .then((resp)=>resp.json())
      .then((data)=>{
        if(data){
          console.log(data)
        }
      })
    }
  }

  //get Total cart function 
  const GetTotalCartAmount = ()=>{
    let TotalAmount = 0;

    for(const item in cartItems){

      if(cartItems[item]>0){
        let item_info = Product_Data.find((product)=>product.id===Number(item))

        TotalAmount = TotalAmount+item_info.new_price*cartItems[item];
      }
    }
    return TotalAmount
  }



  const HandleCartCount = ()=>{
    let TotalItems = 0
    for(const item in cartItems){
      if(cartItems[item]>0){
        TotalItems = TotalItems+cartItems[item]
      }
    }
 return TotalItems;
  }

 

    return(
        <>
        <ShopContext.Provider value={{HandleCartCount,Product_Data,cartItems,AddToCart,RemoveFromCart,GetTotalCartAmount,Handle_Search,query,Querry_Data}}>
        {props.children}
        </ShopContext.Provider>
        </>
    )
}