const appointments=require("../models/appointmentSchema")
const addAppointment=async(req,res)=>{
    try{
        const appt=req.body;
       const insertappt= await appointments.create(appt);
       res.json(insertappt);
    }
    catch(err){
        console.log("ERROR INSERTING APPOINTMENTS",err );
    }
}
const freeslots=async(req,res)=>{
    try{
        console.log(req.body);
        const date=req.body;
        const slots=await appointments.find(date,{time:1,_id:0});
        console.log(slots);
        res.json(slots);
    }
    catch(err){
        console.log("ERROR FETCHING FREE TIME SLOTS",err);
    }
}
module.exports.addAppointment=addAppointment;
module.exports.freeslots=freeslots;