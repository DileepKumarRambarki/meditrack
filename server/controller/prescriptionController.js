const prescription = require("../models/prescSchema");
const hospital=require('../models/hospitalSchema')
/*
   Add Prescription
*/
const addPrescription = async (req, res) => {
  try {
    const { usermail, hospitalId, date, medicines } = req.body;

    // Basic validation
    if (!usermail || !hospitalId) {
      return res.status(400).json({
        message: "usermail and hospitalId are required",
      });
    }

    const newPrescription = await prescription.create({
      usermail,
      hospitalId,
      date,
      medicines,
    });

    return res.status(201).json({
      message: "Prescription added successfully",
      data: newPrescription,
    });
  } catch (err) {
    console.log("ERROR INSERTING PRESCRIPTION", err);
    return res.status(500).json({
      message: "Server error while adding prescription",
    });
  }
};


/*
   Get Prescriptions by Patient Email
*/
const getPrescriptionByUser = async (req, res) => {
  try {
    const { usermail } = req.params;

    const prescriptions = await prescription.find({ usermail });

    const updated = await Promise.all(
      prescriptions.map(async (item) => {
        const hospitalData = await hospital.findOne(
          { hospitalId: item.hospitalId },
          { hospital: 1 }   // change field to your actual hospital name field
        );

        return {
          ...item.toObject(),
          hospital: hospitalData?.hospital || "Unknown Hospital",
        };
      })
    );

    return res.status(200).json(updated);

  } catch (err) {
    console.log("ERROR FETCHING USER PRESCRIPTIONS", err);
    return res.status(500).json({
      message: "Server error while fetching prescriptions",
    });
  }
};


/*
   Get Prescriptions by Hospital
*/
const getPrescriptionByHospital = async (req, res) => {
  try {
    const { hospitalId } = req.params;

    const prescriptions = await prescription.find({ hospitalId });
    return res.status(200).json(prescriptions);
  } catch (err) {
    console.log("ERROR FETCHING HOSPITAL PRESCRIPTIONS", err);
    return res.status(500).json({
      message: "Server error while fetching prescriptions",
    });
  }
};


/*
   Delete Prescription
*/
const deletePrescription = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await prescription.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        message: "Prescription not found",
      });
    }

    return res.status(200).json({
      message: "Prescription deleted successfully",
    });
  } catch (err) {
    console.log("ERROR DELETING PRESCRIPTION", err);
    return res.status(500).json({
      message: "Server error while deleting prescription",
    });
  }
};
const getHospitalname = async (hospitalId) => {
  try {
    const response = await hospital.findOne(
      { hospitalId },
      { hospital: 1 }
    );
    return response?.hospital;
  } catch (err) {
    console.log("ERROR GETTING HOSPITAL NAME", err);
  }
};

module.exports = {
  addPrescription,
  getPrescriptionByUser,
  getPrescriptionByHospital,
  deletePrescription,
};
