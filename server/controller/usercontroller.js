const users=require("../models/userschema");
const bcrypt=require("bcryptjs");
const addUser=async (req,res)=>{
    try{
        const userdetails=await users.findOne({usermail:req.body.usermail});
        if(!userdetails){
            const hashedpwd=await bcrypt.hash(req.body.password,10);
            const insertUser=await users.create({...req.body,password:hashedpwd});
            res.json(insertUser);
        }
        else{
            res.json("user already exists");
        }
    }
    catch(err){
        console.log("ERROR ADDING USER",err);
        res.json("error adding user");
    }
}
const authUser=async (req,res)=>{
    try{
        const pwd=req.body.password;
        const userdetails=await users.findOne({usermail:req.body.usermail});
        if(userdetails){
        const validuser=await bcrypt.compare(pwd,userdetails.password);
        res.json(validuser?"valid user":"invalid user");
        }
        else{
            res.json("invalid user");
        }
    }
    catch(err){
        console.log("ERROR AUTHENTICATING USER",err);
    }
}
module.exports.addUser=addUser;
module.exports.authUser=authUser;