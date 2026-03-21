const mongoose = require("mongoose")

const hospitalSchema = new mongoose.Schema({

    hospitalId:{
        type:String,
        required:true
    },

    hospital:{
        type:String,
        required:true
    },

    bid:{
        type:String,
        required:true
    },

    mobile:{
        type:String
    },

    address:{
        type:String
    },

    timetable:{
        type:Object,
        default:{
            "Dermatology":{
                doctor:"",
                time:"10:00AM-12:00PM",
                patientCount:5
            },
            "General Medicine":{
                doctor:"",
                time:"11:00AM-01:00PM",
                patientCount:5
            },
            "Gastroenterology":{
                doctor:"",
                time:"12:00PM-02:00PM",
                patientCount:5
            },
            "Hepatology":{
                doctor:"",
                time:"01:00PM-03:00PM",
                patientCount:5
            },
            "Orthopedics":{
                doctor:"",
                time:"02:00PM-04:00PM",
                patientCount:5
            },
            "Pulmonology":{
                doctor:"",
                time:"03:00PM-05:00PM",
                patientCount:5
            },
            "Cardiology":{
                doctor:"",
                time:"04:00PM-06:00PM",
                patientCount:5
            },
            "Neurology":{
                doctor:"",
                time:"05:00PM-07:00PM",
                patientCount:5
            },
            "Pediatrics":{
                doctor:"",
                time:"06:00PM-08:00PM",
                patientCount:5
            },
            "ENT":{
                doctor:"",
                time:"07:00PM-09:00PM",
                patientCount:5
            },
            "Gynecology":{
                doctor:"",
                time:"08:00PM-10:00PM",
                patientCount:5
            }
        }
    }

})

const hospital = mongoose.model("hospital", hospitalSchema)

module.exports = hospital