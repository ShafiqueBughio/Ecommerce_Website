import Items from './Compponents/Items'
import './App.css'
import Cart from './Compponents/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar/Navbar.jsx'
import { useState,useEffect } from 'react';

//toastify 
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from './Products/Product.jsx';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Login from './Authentication/Login.jsx';
import Footer from './Products/Footer.jsx';
import ShopCategory from './ShopCategory/ShopCategory.jsx';
import Detail from './ProductDetails/Detail.jsx';
import Place_Order from './PlaceOrder/Place_Order.jsx';






function App() {


  const [cartvisible,setcartvisible] = useState(false);

  

  //   const togglecart = ()=>{
  //       setcartvisible(!cartvisible);
  //       SetSignup(false);
  //       SetLogin(false);
  //       setcontact(false);
  //   }
 
        return(
          <>
         
         <BrowserRouter>
         <ToastContainer/>
         <MyNavbar/>
         <Routes>
         
          
          <Route path='/' element = {<Product/>}/>
          <Route path='/kids' element = {<ShopCategory banner="src\assets\Ecommerce_Frontend_Assets\banner_kids.png" category ="kid"/>}/>
          <Route path='/men' element = {<ShopCategory banner = "src\assets\Ecommerce_Frontend_Assets\banner_mens.png" category="men"/>}/>
          <Route path='/women' element = {<ShopCategory banner = "src\assets\Ecommerce_Frontend_Assets\banner_women.png" category="women"/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/order' element={<Place_Order/>}/>
          <Route path='/login' element = {<Login/>}/>
         
          <Route path='/detail/:detailId' element = {<Detail/>}/>
         </Routes>
         <Footer/>
         </BrowserRouter>
          </>
        )
      
    }
  
 


export default App
