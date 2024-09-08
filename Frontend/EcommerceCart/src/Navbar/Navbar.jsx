import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Ecommerce_Frontend_Assets/logo.png";
import cart_icon from "../assets/Ecommerce_Frontend_Assets/cart_icon.png";
import { ShopContext } from "../context/Context";
import { toast} from 'react-toastify';

function MyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle
  const [menu, setMenu] = useState("shop");

  // Context
  const { HandleCartCount } = useContext(ShopContext);

  function Logout_Handler(){
    localStorage.removeItem('auth-token');
    toast.success("Logout successful! Thank you for visiting.");
    setTimeout(() => {
      window.location.replace("/");
    }, 2000);
  }

  return (
    <>
      {/* Navbar */}
      <div className=" flex items-center justify-between p-3 bg-white shadow-md sticky top-0 z-50">
        
        {/* Logo and Website Name */}
        <div className="flex items-center space-x-2  lg:ml-24 md:ml-16 max-sm:ml-10">
          <img src={logo} alt="Logo" className="h-10 w-10 md:h-14 md:w-14" />
          <p className="text-xl md:text-2xl font-semibold">SHOPPER</p>
        </div>

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              onClick={() => setMenu("shop")}
              className={`${menu === "shop" ? "border-b-2 border-red-600" : ""}`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/kids"
              onClick={() => setMenu("kids")}
              className={`${menu === "kids" ? "border-b-2 border-red-600" : ""}`}
            >
              Kids
            </Link>
          </li>
          <li>
            <Link
              to="/men"
              onClick={() => setMenu("men")}
              className={`${menu === "men" ? "border-b-2 border-red-600" : ""}`}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to="/women"
              onClick={() => setMenu("women")}
              className={`${menu === "women" ? "border-b-2 border-red-600" : ""}`}
            >
              Women
            </Link>
          </li>
       
        </ul>

        {/* Cart and Login Button */}
        <div className="flex items-center space-x-2 md:space-x-4 mr-4 lg:mr-24">
          <Link to="/cart" className="relative hidden md:block">
            <img src={cart_icon} alt="Cart" className="h-6 w-6 md:h-8 md:w-8" />
            {/* Cart count badge */}
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-red-100 bg-red-600 rounded-full">
              {HandleCartCount()}
            </span>
          </Link>
         {localStorage.getItem('auth-token')
         ?<button className="px-3 max-sm:hidden py-1 md:px-4 md:py-2 text-sm md:text-base bg-transparent  border rounded-3xl  bg-latest_color text-white  hover:bg-red-600 transition-colors hover:bg-[linear-gradient(90deg,rgba(100,45,135,1)0%,rgba(200,33,33,1)0%,rgba(202,141,55,1)100%)]" onClick={()=>Logout_Handler()}>Logout</button>
         : <Link to="/login">
            <button className="px-4 max-sm:hidden py-1 md:px-4 md:py-2 text-sm md:text-base bg-transparent    rounded-3xl    bg-latest_color text-white  hover:bg-red-600 transition-colors hover:bg-[linear-gradient(90deg,rgba(100,45,135,1)0%,rgba(200,33,33,1)0%,rgba(202,141,55,1)100%)]">
              Login
            </button>
          </Link>}

        

          {/* Hamburger Menu Button for smaller screens */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown menu for smaller screens */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <li className="border-b">
              <Link
                to="/"
                onClick={() => {
                  setMenu("shop");
                  setMenuOpen(false); // Close menu after click
                }}
                className="block px-4 py-2"
              >
                Shop
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="/kids"
                onClick={() => {
                  setMenu("kids");
                  setMenuOpen(false); // Close menu after click
                }}
                className="block px-4 py-2"
              >
                Kids
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="/men"
                onClick={() => {
                  setMenu("men");
                  setMenuOpen(false); // Close menu after click
                }}
                className="block px-4 py-2"
              >
                Men
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="/women"
                onClick={() => {
                  setMenu("women");
                  setMenuOpen(false); // Close menu after click
                }}
                className="block px-4 py-2"
              >
                Women
              </Link>
            </li>
            <li className="border-b">
              {localStorage.getItem("auth-token")?<button onClick={()=>Logout_Handler()}>Logout</button>: <Link
                to="/login"
                onClick={() => {
                  setMenu("login");
                  setMenuOpen(false); // Close menu after click
                }}
                className="block px-4 py-2"
              >
                Login
              </Link>}
             
            </li>
           
            <li>
              <Link 
              to='/cart'
              onClick={() => {
                setMenu("cart");
                setMenuOpen(false); // Close menu after click
              }}
              className="block px-4 py-2"
              >
                <img src={cart_icon} alt="Cart" className="h-6 w-6 md:h-8 md:w-8" />
            {/* Cart count badge */}
            <span className="absolute -mt-8 ml-4  inline-flex items-center justify-center px-1 py-0 text-xs font-semibold text-red-100 bg-red-600 rounded-full">
              {HandleCartCount()}
            </span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default MyNavbar;
