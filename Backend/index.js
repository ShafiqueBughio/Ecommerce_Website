require("dotenv").config();

//defining port 
const port = process.env.PORT||5000;
module.exports = {port};
//import
const express = require("express");
//creating app
const app = express();


const cors = require("cors");
const exp = require("constants");
//import router 
const Product_Route = require("./Routes/routes")
//user route 
const User_Route = require("./Routes/Users_routes");
//import MongoDb Connection
const {MongoDb_Connection} = require("./Connection");
const { Order_Router } = require("./Routes/Order_Routes");

//response of a request directly convert into json 
app.use(express.json());


//react js project connect with express js at port 4000
app.use(cors());

//connecting mongoDB atlas
MongoDb_Connection(process.env.MONGO_URL)
.then(()=>{ console.log("MongoDb Connected")})
.catch((err)=>{console.log(`Something went Wrong MongoDb Can't connected. ${err}`)});


//user Routee
app.use(User_Route);

//Product Routes
app.use(Product_Route);

//order Route
app.use(Order_Router);




//listen app
app.listen(port,(error)=>{
    if(!error){
        console.log(`Server is running perfectly on Port : ${port}`)
    }
    else{
        console.log("Error: "+error);
    }
})


