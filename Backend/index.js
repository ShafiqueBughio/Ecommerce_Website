//defining port 
const port = 5000;
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
const {MongoDb_Connection} = require("./Connection")

//response of a request directly convert into json 
app.use(express.json());


//react js project connect with express js at port 4000
app.use(cors());

//connecting mongoDB atlas
MongoDb_Connection("mongodb+srv://shafique63005:%23Bughio123@cluster0.us0afxz.mongodb.net/e-commerce")
.then(()=>{ console.log("MongoDb Connected")})
.catch((err)=>{console.log(`Something went Wrong MongoDb Can't connected. ${err}`)});


//user Routee
app.use(User_Route);

//Product Routes
app.use(Product_Route);




//listen app
app.listen(port,(error)=>{
    if(!error){
        console.log(`Server is running perfectly on Port : ${port}`)
    }
    else{
        console.log("Error: "+error);
    }
})


