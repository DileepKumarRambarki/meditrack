const appointments=require("../models/appointmentSchema")
const users=require('../models/userschema');
const hospitals=require("../models/hospitalSchema")
const {addHospital,getHospital}=require("../controller/hospitalController");
const {encodeBid}=require("../utils/Translator");
const addAppointment=async(req,res)=>{
    try{
        const appt=req.body;
        const hid=appt.hospital.hospitalId;
        const hospitalId=encodeBid(hid);
        const hptl=await getHospital(hospitalId);
        if(!hptl){
            const {hospital}=req.body;
           await addHospital({hospitalId:hospitalId,hospital:hospital.name,bid:hospital.hospitalId,mobile:hospital.mobileno,address:hospital.district});
        }
        const userresp=await users.findOne({usermail:appt.usermail},{username:1});
       const insertappt= await appointments.create(
        {date:appt.date,
        time:appt.time,
        department:appt.department,
        hospital:appt.hospital.name,
        usermail:appt.usermail,
        username:userresp.username,
        hospitalId:hospitalId
        });
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
        // console.log(req.body);
        const {date}=req.body;
        const hid=req.body.hospitalId;
        const hospitalId=encodeBid(hid);
        const slots=await appointments.find({hospitalId:hospitalId,date:date},{time:1,_id:0});
        // console.log(slots);
        res.json(slots);
    }
    catch(err){
        console.log("ERROR FETCHING FREE TIME SLOTS",err);
    }
}
module.exports.addAppointment=addAppointment;
module.exports.freeslots=freeslots;
module.exports.getAppointments=getAppointments;
