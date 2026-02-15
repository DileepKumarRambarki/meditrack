const hospital=require("../models/hospitalSchema")
const addHospital=async(item)=>{
    try{
        const response=await hospital.create(item);

    }
    catch(err){
        console.log('ERROR INSERTING HOSPITAL ',err);
    }
}
const getHospital=async(id)=>{
    try{
        const response=await hospital.findOne({hospitalId:id});
        return response;
    }
    catch(err){
        console.log('ERROR GETTING HOSPITAL DATA',err);
    }
}
module.exports.addHospital=addHospital;
module.exports.getHospital=getHospital;