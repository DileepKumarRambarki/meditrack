require("dotenv").config();
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const router=require("./routes/router");
const mongoose=require("mongoose");
app.use(express.json());
app.use(cors());
app.use("/",router);
const connection=async()=>{
   try{
    const url = process.env.MONGO_URL;
    await mongoose.connect(url, {
    });
    console.log("database connected");
   }
   catch(err){
    console.log("error connceting database",err);
   }
};
connection();
const port=process.env.PORT || 3000; 
app.listen(port,()=>{
    console.log(`port ${port} started`);
});
