const axios =require('axios');
const getSpecialist=async(req,res)=>{
    try{
        const url="https://python-api";
        const {prompt}=req.body;
        console.log(prompt);
        // const response=await axios.post(url,{prompt});
        //const specialist=response.data;
        const specialist='Dentist';
        res.json({specialist:specialist});
    }
    catch(err){
        console.log("ERROR GETTING SPECIALIST",err);
    }
}
module.exports.getSpecialist=getSpecialist;