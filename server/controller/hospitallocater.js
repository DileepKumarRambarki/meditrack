require("dotenv").config();
const axios = require('axios');
const hospitalLocator=async(req,res)=>{
    const {lat,lan}=req.body;
const options = {
  method: 'GET',
  url: 'https://local-business-data.p.rapidapi.com/search-nearby',
  params: {
    query: 'hospitals',
    lat: lat,
    lng: lan,
    limit: '20',
    language: 'en',
    region: 'in',
    extract_emails_and_contacts: 'true'
  },
  headers: {
    'x-rapidapi-key': process.env.RAPID_API_KEY,
    'x-rapidapi-host': 'local-business-data.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
    res.json(response.data);
} catch (error) {
	console.error("ERROR FINDING NEARBY HOSPITALS",error);
}
}
module.exports=hospitalLocator;