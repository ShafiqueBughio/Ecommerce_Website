const express = require("express");
const {fetch_user} = require("../Controllers/Users_Handler");
const {PlaceOrder} = require("../Controllers/Order_Handler")

const Order_Router = express.Router();

Order_Router.post("/place",fetch_user,PlaceOrder);

module.exports = {Order_Router};