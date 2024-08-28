
const {Product} = require("../Model/Scheema_Model")
const {port} = require("../index")

function Handle_Upload_Image(req,res){
    res.json({
        status:200,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
  
}

async function Handle_Cretae_Product_To_DB(req,res){
    let Products = await Product.find({});

    let Id;

    if(Products.length>0){

    //it return the last element of an arrayProducts with in an array
    let Last_product_array = Products.slice(-1); 
        let Last_Product = Last_product_array[0];   //it give only first element of the array
        Id = Last_Product.id+1;
    }
    else{
        Id = 1;
    }

    const product = await Product.create({
        id:Id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    if(product){
        res.json({
            status:200,
            message:"Product has been added to database successfully."
        })
    }
    else{
        res.json({
            status:404,
            message:"Something went wrong product can't be added in database."
        })
    }
}

async function Handle_Delete_Product(req,res){
    await Product.findOneAndDelete({id:req.body.id})
    .then(()=>{
        res.json({
            status:200,
            message:"Product removed from database."
        })
    })
    .catch((err)=>{
        res.json({
            status:404,
            message:"Something went wrong Product not deleted from database",err
        });
    })
}

async function Handle_Get_All_Products(req,res){
    const products = await Product.find({});

    if(products){
        console.log("All Products Fetched");
       res.json(products);
    }
    else{
        res.json({status:404,message:"Products not found"})
    }
}

async function Handle_New_Collections(req,res){

    let products = await Product.find({});

    const New_Collections = products.slice(1).slice(-8);

    console.log("New Collections Fetched");
    res.send(New_Collections);
}

async function Handle_Popular_Products(req,res){
    
    let products = await Product.find({category:"women"});

    
    let Popular_in_Women = products.slice(0,4);

    console.log("popular products fetched");
    res.send(Popular_in_Women);
    

}


//Search Product Handler
async function Handle_Product_Search(req,res){

    const query = req.query.q ? req.query.q.trim() : '';  // Trim to avoid extra spaces

    try {
        let products;
        
        if (query) {
          // If a query is provided, filter products by name
          products = await Product.find({
            name: { $regex: query, $options: 'i' }  // Case-insensitive regex search
        });
        console.log("Matching Products Fetched");
        res.json(products);  // Send the results back to the client
    }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}


module.exports = {Handle_Product_Search,Handle_Popular_Products,Handle_New_Collections,Handle_Upload_Image,Handle_Cretae_Product_To_DB,Handle_Delete_Product,Handle_Get_All_Products}