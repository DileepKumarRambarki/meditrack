const labrecords=require("../models/labrecordsSchema");
const prescription=require("../models/prescSchema");
const addLabRecord=async (req,res)=>{
    try{
        // const usermail=req.body.usermail;
        // const prevlab=await labrecords.findOne({usermail:usermail});
        // let updatedlab;
        // if(prevlab){
        //     updatedlab=[...prevlab,req.body.labrecords];
        // }
        // else{
        //     updatedlab=[req.body.labrecords];
        // }
        const insertlab=await labrecords.create(req.body);
        res.json(insertlab);
    }
    catch(err){
        console.log("ERROR ADDING LAB RECORDS",err);
    }
}
const addPresc=async(req,res)=>{
    try{
        const insertpres=await  prescription.create(req.body);
        res.json(insertpres);
    }
    catch(err){
        console.log("ERROR INSERTING PRESCRIPTION",err);
    }
}
module.exports.addLabRecord=addLabRecord;
module.exports.addPresc=addPresc;