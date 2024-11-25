const mongoose=require("mongoose");
const labrecordsSchema=new mongoose.Schema({
    usermail:{
        type:String,
        required:true,
    },
    date:String,
    hospital:String,
    tests:{
        type:[{testname:{type:String},
            testresult:{type:String},
            testrange:{type:String}}],
            default:[],
    },
    
})
const labrecords=new mongoose.model("reocrds",labrecordsSchema);
module.exports=labrecords;