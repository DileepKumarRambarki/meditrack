
const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    usermail:{
        type: String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    age:Number,
    address:String,
})
const users=new mongoose.model("users",userSchema);
module.exports=users;