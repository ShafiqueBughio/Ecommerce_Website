const express = require("express");
const router = express.Router();
const {upload} = require("../Upload_Image/uploadimage")
const {fetch_user,Handle_Upload_Image,Handle_Cretae_Product_To_DB, Handle_Delete_Product, Handle_Get_All_Searched_Products, Handle_New_Collections, Handle_Popular_Products, Handle_Add_To_Cart, Handle_Get_All_Products} = require("../Controllers/Handler")


router.use('/images',express.static("upload/images"));
//Api Creation
router.post("/upload",upload.single('product'),Handle_Upload_Image);

//Add product to Databse api
router.post("/addproduct",Handle_Cretae_Product_To_DB);



//Remove Product From Database
router.delete("/removeproduct",Handle_Delete_Product)


//get all searched users from database
router.get("/searchproducts",Handle_Get_All_Searched_Products);

//get all products
router.get("/allproducts",Handle_Get_All_Products);

//new collections
router.get("/newcollections",Handle_New_Collections)

//popular products
router.get("/popular",Handle_Popular_Products);

// router.get("/search/product",);





module.exports = router;