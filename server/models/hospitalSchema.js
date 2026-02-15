const mongoose=require("mongoose")
const hospitalSchema=new mongoose.Schema({
    hospitalId:{
        type:String,
        required:true,
    },
    hospital:{
        type:String,
        required:true,
    },
    bid:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
    },
    address:{
        type:String,
    }
})
const hospital=new mongoose.model("hospital" ,hospitalSchema);
module.exports=hospital;
