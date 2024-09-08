const mongoose = require("mongoose");

//scheema
const Orders_Schema = new mongoose.Schema({
    UserId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Item Processing"},
    Date:{type:Date,default:Date.now()},
    Payment:{type:Boolean,default:false},

})

const Orders_Model = mongoose.model("orders",Orders_Schema);

module.exports = {Orders_Model};
