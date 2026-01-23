const mongoose=require("mongoose")
const appointmentSchema=new mongoose.Schema({
    date:{
        type:String,
        required:true,
    },
    hospital:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    usermail:{
        type:String,
        required:true,
    }
})
const appointments=new mongoose.model("appointments" ,appointmentSchema);
module.exports=appointments;
