require("dotenv").config();

// Importing required packages
const express = require("express");
const cors = require("cors");
const { MongoDb_Connection } = require("./Connection");
const Product_Route = require("./Routes/routes");
const User_Route = require("./Routes/Users_routes");
const { Order_Router } = require("./Routes/Order_Routes");

// Creating the app
const app = express();

// Defining port (this will not be used in serverless)
const port = process.env.PORT || 5001;

// CORS setup
app.use(cors({
    origin: ['https://ecommerce-website-frontend-six.vercel.app'], // Allowed origins
    methods: ["POST", "GET"],
    credentials: true // Enable credentials (cookies, authorization headers, etc.)
}));

// Middleware to parse JSON
app.use(express.json());

// Connecting to MongoDB Atlas
MongoDb_Connection(process.env.MONGO_URL || "mongodb+srv://shafique63005:%23Bughio123@cluster0.us0afxz.mongodb.net/e-commerce")
    .then(() => { console.log("MongoDb Connected"); })
    .catch((err) => { console.log(`Something went wrong, MongoDb can't connect. ${err}`); });

// User Routes
app.use(User_Route);

// Product Routes
app.use(Product_Route);

// Order Routes
app.use(Order_Router);

// Exporting the app as a serverless function for Vercel
module.exports = (req, res) => {
    app(req, res); // Invoke the Express app for each request
};

// Optionally, log the port for local testing
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, (error) => {
        if (!error) {
            console.log(`Server is running perfectly on Port: ${port}`);
        } else {
            console.log("Error: " + error);
        }
    });
}
