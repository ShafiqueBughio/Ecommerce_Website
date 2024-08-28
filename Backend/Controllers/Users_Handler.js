const {Users} = require("../Model/Users_Model")
const {Set_User,Get_user} = require("../Service/Service")

//Signup
async function Handle_Signup(req,res){
    //check is provided email unique or not
    let check = await Users.findOne({email:req.body.email});

    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email"})
    }

    //else
    let cart = {};
    for(let i=0;i<300;i++){
        cart[i]= 0;
    }

    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
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
        const Pass_Compare = req.body.password === user.password;

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


module.exports = {Get_Cart_Data,Handle_remove_From_Cart,Handle_Signup,Handle_Login,fetch_user,Handle_Add_To_Cart}