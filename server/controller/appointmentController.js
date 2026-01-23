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
const getAppointments=async(req,res)=>{
    try{
        const usermail=req.body.usermail;
        const appointmentsList=await appointments.find({usermail:usermail});
        // getting only the upcoming appointments not completed ones
        const currentDate = new Date();
        const upcomingAppointments = appointmentsList.filter(appointment => {
            const appointmentDate = new Date(appointment.date);
            return appointmentDate >= currentDate;
        });
        res.json(upcomingAppointments).status(200);
    }
    catch(err){
        console.log("ERROR FETCHING APPOINTMENTS",err);
        res.status(500).send("Internal Server Error");
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
module.exports.getAppointments=getAppointments;
