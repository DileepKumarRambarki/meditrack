const mongoose=require("mongoose");
const prescSchema=new mongoose.Schema({
    usermail:{
        type:String,
        required:true,
    },
    hospitalId:{
        type:String,
        required:true,
    },
    date:String,
    medicines:{
        type:[{medicine:{type:String},
                medtype:{type:String},}],
        default:[],
    },
});
const prescription=new mongoose.model("prescription",prescSchema);
module.exports=prescription;