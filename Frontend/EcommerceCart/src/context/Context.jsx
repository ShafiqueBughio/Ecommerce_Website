
import React, { useEffect } from "react";
import { createContext,useState } from "react";
import axios from "axios";


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
useEffect(() => {
  const fetchData = async () => {
    try {
      const resp = await axios.get("https://ecommerce-website-backend-zeta.vercel.app/allproducts");
      SetProductData(resp.data); // Use `resp.data` to access the actual data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, []);


useEffect(() => {
  const fetchData = async () => {
    if (query) {
      try {
        // Fetch the searched products based on query
        const resp = await axios.get(`https://ecommerce-website-backend-zeta.vercel.app?q=${query}`);
        Set_Querry_Data(resp.data); // Set the fetched data
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      // Reset search data when query is empty
      Set_Querry_Data([]);
    }
  };

  fetchData();
}, [query]);






useEffect(() => {
  const fetchCartData = async () => {
    const token = localStorage.getItem('auth-token');
    
    if (token) {
      try {
        const response = await axios.post("https://ecommerce-website-backend-zeta.vercel.app/cartData", 
          {},  // For POST requests without a body, you can pass an empty object
          {
            headers: {
              Accept: "application/form-data",
              'auth-token': token,
              'Content-Type': "application/json",
            },
            withCredentials:true,
          }
        );
        
        SetCartItems(response.data); // Axios automatically parses the JSON response
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
  };

  fetchCartData();
}, []);


const AddToCart = (ItemId) => {
  // Update the cart items state
  SetCartItems((prev) => ({ ...prev, [ItemId]: (prev[ItemId] || 0) + 1 }));

  // Check if the user is authenticated
  const token = localStorage.getItem('auth-token');
  
  if (token) {
    // Make the axios POST request
    axios.post("https://ecommerce-website-backend-zeta.vercel.app/AddToCart", 
      { itemId: ItemId }, // Send the itemId in the request body
      {
        headers: {
          Accept: "application/form-data",
          'auth-token': token,
          'Content-Type': "application/json",
        },
        withCredentials:true,
      }
    )
    .then((response) => {
      console.log(response.data); // Log the response data
    })
    .catch((error) => {
      console.error("Error adding to cart:", error); // Error handling
    });
  }
};





const RemoveFromCart = (ItemId) => {
  // Update the cart items state
  SetCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));

  // Check if the user is authenticated
  const token = localStorage.getItem('auth-token');

  if (token) {
    // Make the DELETE request with axios
    axios.delete("https://ecommerce-website-backend-zeta.vercel.app/removeCart", {
      headers: {
        Accept: "application/form-data",
        'auth-token': token,
        'Content-Type': "application/json",
      },
      data: { itemId: ItemId }, // Pass the data object for DELETE request
    })
    .then((response) => {
      console.log(response.data); // Log the response data
    })
    .catch((error) => {
      console.error("Error removing item from cart:", error); // Error handling
    });
  }
};

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