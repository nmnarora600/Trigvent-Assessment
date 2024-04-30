const mongoose= require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGOURI

const connectToMongo=async()=>{
   try{
    mongoose.connect(mongoURI);
    console.log("connected to mongoDB")
   } 
   catch(error){
    console.log("error occured");
   }
}

module.exports=connectToMongo;