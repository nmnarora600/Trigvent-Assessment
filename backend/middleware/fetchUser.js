const jwt= require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET_TOKEN=process.env.JWT_SECRET_TOKEN;

const fetchUser=(req,res,next)=>{
    //GET user from jwt token and add its id to req object
    const token= req.header('auth-token')
    if(!token){
        res.status(401).json({error:"Use a Valid Token"})
    }
try {
    const data = jwt.verify(token, JWT_SECRET_TOKEN);
    req.user= data.user
    next();
} catch (error) {
    res.status(401).json({error:"Not a Valid Token"})
}
   

    
}

module.exports=fetchUser;