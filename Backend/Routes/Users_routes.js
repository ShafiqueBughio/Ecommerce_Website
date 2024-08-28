const express = require("express");
const {Handle_Signup,Handle_Login, Handle_remove_From_Cart, Get_Cart_Data} = require("../Controllers/Users_Handler")
const {fetch_user,Handle_Add_To_Cart} = require("../Controllers/Users_Handler")
const router = express.Router();

//signup
router.post("/signup",Handle_Signup);

//Login
router.post("/Login",Handle_Login);

//Add To Cart 
router.post("/AddToCart",fetch_user,Handle_Add_To_Cart);

//Remove from Cart
router.delete("/removeCart",fetch_user,Handle_remove_From_Cart);

//Get Cart Data
router.post("/cartData",fetch_user,Get_Cart_Data);

module.exports = router;