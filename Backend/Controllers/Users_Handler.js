const {Users} = require("../Model/Users_Model")
const {Set_User,Get_user} = require("../Service/Service")
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const salt_rounds = 10;
//Signup
async function Handle_Signup(req,res){
    //check is provided email unique or not
    let check = await Users.findOne({email:req.body.email});

    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email"})
    }

    const hashed_Password = await bcrypt.hash(req.body.password,salt_rounds);


    //else
    let cart = {};
    for(let i=0;i<300;i++){
        cart[i]= 0;
    }

    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:hashed_Password,
        cartData:cart,
    })

    await user.save();

    const token = Set_User(user);
    res.json({success:true,token});

}

//Login
async function Handle_Login(req,res){



    const user = await Users.findOne({email:req.body.email});

    if(user){
        const Pass_Compare = await bcrypt.compare(req.body.password, user.password);
   

        if(Pass_Compare){
            const token = Set_User(user);
            res.json({success:true,token});
        }

        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }

    else{
        res.json({success:false,errors:"Wrong email Address"});
    }
}


//Middleware for Add to cart
async function fetch_user(req,res,next){
    
    const token = req.header('auth-token');

    if(!token){
        res.status(401).json({errors:"Please authenticate using a valid token"})
    }

    else{
        try {
            const data = Get_user(token);
           req.user = data;    // set id in req.user
            next();
        } catch (error) {
            res.status(401).json({errors:"Please authenticate using a valid token"})
        }
    }
}


//Add To Cart 
async function Handle_Add_To_Cart(req,res){

    let User_Data = await Users.findOne({_id:req.user.id});

    User_Data.cartData[req.body.itemId] +=1;

    await Users.findOneAndUpdate({_id:req.user.id},{cartData:User_Data.cartData})

    res.send("added");
}


//Remove From Cart
async function Handle_remove_From_Cart(req,res){

    let User_Data = await Users.findOne({_id:req.user.id});

    if( User_Data.cartData[req.body.itemId]>0)

    User_Data.cartData[req.body.itemId] -=1;

    await Users.findOneAndUpdate({_id:req.user.id},{cartData:User_Data.cartData})

    res.send("item removed");
}

//Get Cart Data
async function Get_Cart_Data(req,res){

    const User_Data = await Users.findOne({_id:req.user.id});
    res.json(User_Data.cartData);
}

async function Handle_forgot_Password(req,res){
    
    const user = await Users.findOne({email:req.body.email});

    if(!user){
        res.json({success:false,errors:"Wrong email address"});
    }
    //create token
    const token = Set_User(user);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'shafiquebughio153@gmail.com',
          pass: 'fcjs tdbj pgpf bgoy'
        }
      });
      
      var mailOptions = {
        from: 'shafiquebughio153@gmail.com',
        to: `${req.body.email}`,
        subject: 'Reset Your Password',
        text: `http://localhost:5173/reset-password/${user._id}/${token}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (!error) {
            res.json({success:true})
        
        } else {
            res.json({ success: false, errors: "Failed to Sent email." });
        }
      });

}
//reset password
async function Handle_Reset_Password(req,res){
    const {userId,token} = req.params;

    const {New_password, Confirm_password} = req.body;
  
    if(New_password === Confirm_password){
       jwt.verify(token,"#shafiq_@store",(err,decoded)=>{
        if(err){
          return res.json({success:false, errors:"error with token"})
        }
        else{
          bcrypt.hash(New_password,10)
          .then(hash=>{
            Users.findByIdAndUpdate({_id:userId},{password:hash})
            .then(succ=>{res.json({success:true})})
            .catch((err)=>{res.json({success:false,errors:`${err}`})})
          })
          .catch((err)=>{res.json({success:false,errors:`${err}`})})
        }
       })
    }
    else{
      res.json({success:false,errors:"Password Not Matched"})
    }
}




module.exports = {Get_Cart_Data,Handle_remove_From_Cart,Handle_Signup,Handle_Login,fetch_user,Handle_Add_To_Cart,Handle_forgot_Password,Handle_Reset_Password}