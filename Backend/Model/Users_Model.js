const mongoose = require("mongoose");

//scheema
const Users_Scheema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    Date:{
        type:Date,
        default:Date.now,
    }
})

//Model
const Users = mongoose.model("users",Users_Scheema);

module.exports = {Users};