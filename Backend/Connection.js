const mongoose = require("mongoose");

async function MongoDb_Connection(url){
    return await mongoose.connect(url)
   
}
module.exports = {MongoDb_Connection};