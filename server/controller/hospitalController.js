const hospital = require("../models/hospitalSchema")
const {encodeBid}=require("../utils/Translator");

const addHospital = async (item) => {
    try{
        const response = await hospital.create(item);
    }
    catch(err){
        console.log('ERROR INSERTING HOSPITAL ',err);
    }
}

const getHospital = async (id) => {
    try{
        const response = await hospital.findOne({hospitalId:id});
        return response;
    }
    catch(err){
        console.log('ERROR GETTING HOSPITAL DATA',err);
    }
}


/* UPDATE TIMETABLE */

const updateHospitalTimetable = async (req, res) => {

    try {

        const { hospitalId, timetable } = req.body;

        // console.log("-> update timetable ", req.body);

        if (!hospitalId || !timetable) {
            return res.status(400).json({
                message: "hospitalId and timetable are required"
            });
        }

        const updatedHospital = await hospital.findOneAndUpdate(
            { hospitalId: hospitalId },
            { $set: { timetable: timetable } },
            { new: true }
        );

        if (!updatedHospital) {
            return res.status(404).json({
                message: "Hospital not found"
            });
        }

        res.json({
            message: "Timetable updated successfully",
            timetable: updatedHospital.timetable
        });

    }
    catch (err) {

        console.log("HOSPITAL UPDATE ERROR:", err);

        res.status(500).json({
            message: "Server error"
        });

    }

}


/* GET TIMETABLE BY HOSPITAL ID */

const getHospitalTimetable = async (req, res) => {

    try{

        let hospitalId = req.params.hospitalId;

        try {
        hospitalId = encodeBid(hospitalId);
        } catch (err) {
        // If encoding fails → assume it's already encoded
        console.log("Using raw hospitalId (already encoded)");
        }
        const hospitalData = await hospital.findOne(
            { hospitalId: hospitalId },
            { timetable: 1, _id: 0 }
        );

        if(!hospitalData){
            return res.status(404).json({
                message:"Hospital not found"
            });
        }

        res.json({
            timetable: hospitalData.timetable
        });

    }
    catch(err){

        console.log("ERROR FETCHING TIMETABLE", err);

        res.status(500).json({
            message:"Server error"
        });

    }

}


module.exports.addHospital = addHospital;
module.exports.getHospital = getHospital;
module.exports.updateHospitalTimetable = updateHospitalTimetable;
module.exports.getHospitalTimetable = getHospitalTimetable;