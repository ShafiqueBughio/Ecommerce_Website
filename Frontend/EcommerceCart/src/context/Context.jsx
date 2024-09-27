import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const Shop_Context_Provider = (props) => {
  const GetDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 301; index++) {
      cart[index] = 0;
    }
    return cart;
  };

  const [Product_Data, SetProductData] = useState([]);
  const [cartItems, SetCartItems] = useState(GetDefaultCart());
  const [query, Set_Querry] = useState("");
  const [Querry_Data, Set_Querry_Data] = useState([]);

  function Handle_Search(e) {
    let value = e.target.value;
    Set_Querry(value);
  }

  // UseEffect for fetching all products on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://ecommerce-website-backend-pink.vercel.app/allproducts");
        SetProductData(resp.data); // Ensure resp.data contains what you expect
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // UseEffect for handling search queries
  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const resp = await axios.get(`https://ecommerce-website-backend-pink.vercel.app?q=${query}`);
          Set_Querry_Data(resp.data); // Make sure to check the structure of resp.data
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      } else {
        Set_Querry_Data([]); // Reset search data when query is empty
      }
    };

    fetchData();
  }, [query]);

  // UseEffect for fetching cart data
  useEffect(() => {
    const fetchCartData = async () => {
      const token = localStorage.getItem('auth-token');

      if (token) {
        try {
          const response = await axios.post(
            "https://ecommerce-website-backend-pink.vercel.app/cartData", 
            {},  // No body for this request
            {
              headers: {
                Accept: "application/form-data",
                'auth-token': token,
                'Content-Type': "application/json",
              },
              withCredentials: true,
            }
          );

          SetCartItems(response.data); // Ensure response.data structure is as expected
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      }
    };

    fetchCartData();
  }, []);

  const AddToCart = (ItemId) => {
    SetCartItems((prev) => ({ ...prev, [ItemId]: (prev[ItemId] || 0) + 1 }));
    const token = localStorage.getItem('auth-token');

    if (token) {
      axios.post(
        "https://ecommerce-website-backend-pink.vercel.app/AddToCart",
        { itemId: ItemId },
        {
          headers: {
            Accept: "application/form-data",
            'auth-token': token,
            'Content-Type': "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
    }
  };

  const RemoveFromCart = (ItemId) => {
    SetCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
    const token = localStorage.getItem('auth-token');

    if (token) {
      axios.delete("https://ecommerce-website-backend-pink.vercel.app/removeCart", {
        headers: {
          Accept: "application/form-data",
          'auth-token': token,
          'Content-Type': "application/json",
        },
        data: { itemId: ItemId },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
    }
  };

  const GetTotalCartAmount = () => {
    let TotalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let item_info = Product_Data.find((product) => product.id === Number(item));
        if (item_info) {
          TotalAmount += item_info.new_price * cartItems[item];
        }
      }
    }
    return TotalAmount;
  };

  const HandleCartCount = () => {
    let TotalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        TotalItems += cartItems[item];
      }
    }
    return TotalItems;
  };

  return (
    <ShopContext.Provider value={{ HandleCartCount, Product_Data, cartItems, AddToCart, RemoveFromCart, GetTotalCartAmount, Handle_Search, query, Querry_Data }}>
      {props.children}
    </ShopContext.Provider>
  );
};
