const express=require("express")
const {addUser,authUser}=require("../controller/usercontroller");
const {addLabRecord,addPresc}=require("../controller/recordsController");
const hospitalLocator=require("../controller/hospitallocater");
const {addAppointment,freeslots,getAppointments,getAppointmentsByHidDate}=require("../controller/appointmentController");
const {getSpecialist} =require("../controller/symptomController");
const {
    addPrescription,
    getPrescriptionByUser,
    getPrescriptionByHospital,
    deletePrescription,
  }=require('../controller/prescriptionController');
const router=express.Router();
router.post("/signup",addUser);
router.post("/login",authUser);
router.post("/lab",addLabRecord);
router.post("/prescription",addPresc);
router.post("/hospitals",hospitalLocator);
router.post("/appointments",addAppointment);
router.post("/freeslots",freeslots);
router.post("/getappointments",getAppointments);
router.post("/getSpecialist",getSpecialist);
router.post('/getapptbyhiddate',getAppointmentsByHidDate);
router.post("/hospital/addpresc", addPrescription);
router.get("/getpresc/:usermail", getPrescriptionByUser);
router.get("/hospital/getpresc/:hospitalId",getPrescriptionByHospital);
router.delete("/delete/:id", deletePrescription);
module.exports=router;