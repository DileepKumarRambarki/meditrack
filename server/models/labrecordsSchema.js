const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  normalRange: {
    type: String,
    required: true
  }
});

const labReportSchema = new mongoose.Schema({
  usermail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  hospitalId: {
    type:String,
    required: true
  },

  hospitalName: {
    type: String,
  },

  reportTitle: {
    type: String,
  },

  tests: [testSchema], // 👈 multiple test entries

  comments: {
    type: String,
    default: ""
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const LabReport =new mongoose.model('LabReport', labReportSchema);
module.exports=LabReport;