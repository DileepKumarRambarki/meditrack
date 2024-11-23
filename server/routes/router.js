const express=require("express")
const {addUser,authUser}=require("../controller/usercontroller");
const router=express.Router();
router.post("/signup",addUser);
router.post("/login",authUser);
module.exports=router;