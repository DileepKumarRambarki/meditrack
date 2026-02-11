const axios =require('axios');
const getSpecialist=async(req,res)=>{
    try{
        const url="http://127.0.0.1:8000/predict";
        const {prompt}=req.body;
        const response=await axios.post(url,{sentence:prompt});
        const specialist=response.data;
        res.json({specialist:specialist['recommended_specialist']});
    }
    catch(err){
        console.log("ERROR GETTING SPECIALIST",err);
    }
}
module.exports.getSpecialist=getSpecialist;