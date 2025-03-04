const express=require("express")
const {addUser,authUser}=require("../controller/usercontroller");
const {addLabRecord,addPresc}=require("../controller/recordsController");
const hospitalLocator=require("../controller/hospitallocater");
const {addAppointment,freeslots}=require("../controller/appointmentController");
const router=express.Router();
router.post("/signup",addUser);
router.post("/login",authUser);
router.post("/lab",addLabRecord);
router.post("/prescription",addPresc);
router.post("/hospitals",hospitalLocator);
router.post("/appointments",addAppointment);
router.post("/freeslots",freeslots);
module.exports=router;