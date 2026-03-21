const LabReport = require('../models/labrecordsSchema');
const hospital=require('../models/hospitalSchema')

// ✅ Create Lab Report
exports.createLabReport = async (req, res) => {
    console.log('in create report');
  try {
    const {
      usermail,
      hospitalId,
      reportTitle,
      tests,
      comments
    } = req.body;
    const newReport = await LabReport.create({
      usermail,
      hospitalId,
      reportTitle,
      tests,
      comments
    });
    // console.log(req.body);
    // const respone=await newReport.save();
    // console.log('in create lab report',newReport);
    res.status(201).json({
      success: true,
      message: "Lab report created successfully",
      data: newReport
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ✅ Get Reports by Email
exports.getReportsByEmail = async (req, res) => {
  try {
    const { usermail } = req.params;

    const reports = await LabReport
      .find({ usermail: usermail })
      .sort({ createdAt: -1 });
      
    const updated = await Promise.all(
        reports.map(async (item) => {
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
    res.status(200).json({
      success: true,
      data: updated
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};