const jwt = require("jsonwebtoken");
const Secret_Key = "#shafiq_@store";

//Setuser Function - create token
function Set_User(user){
   return jwt.sign({
        id:user.id,
    },Secret_Key)
}

//return user id
function Get_user(token){
   return jwt.verify(token,Secret_Key);
}

module.exports = {Set_User,Get_user};