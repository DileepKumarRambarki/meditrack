import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState, useEffect } from 'react';
import styles from "./Appointment.module.css"
import Snack from './Snack';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from "axios"
import { useAuth } from '../utils/Authcontext';

export default function ResponsiveDatePickers() {

  const { userId } = useAuth();
  const usermail = userId;

  const location = useLocation();

  const [hospital] = useState(location.state.hospital);
  const [dept] = useState(location.state.dept);

  const defaultTimetable = {
    Dermatology: { doctor:"John", time:"10:00AM-12:00PM", patientCount:5 },
    "General Medicine": { doctor:"Danny", time:"11:00AM-01:00PM", patientCount:5 },
    Gastroenterology: { doctor:"Raj", time:"12:00PM-02:00PM", patientCount:5 },
    Hepatology: { doctor:"Somu", time:"01:00PM-03:00PM", patientCount:5 },
    Orthopedics: { doctor:"Devara", time:"02:00PM-04:00PM", patientCount:5 },
    Pulmonology: { doctor:"Varanasi", time:"03:00PM-05:00PM", patientCount:5 },
    Cardiology: { doctor:"Lucky", time:"04:00PM-06:00PM", patientCount:5 },
    Neurology: { doctor:"Mahesh", time:"05:00PM-07:00PM", patientCount:5 },
    Pediatrics: { doctor:"Nani", time:"06:00PM-08:00PM", patientCount:5 },
    ENT: { doctor:"Arjun", time:"07:00PM-09:00PM", patientCount:5 },
    Gynecology: { doctor:"Sree leela", time:"08:00PM-10:00PM", patientCount:5 },
    Nephrology: { doctor:"Prabhas", time:"08:00PM-10:00PM", patientCount:5 },
    Tricology: { doctor:"Pavan", time:"08:00PM-10:00PM", patientCount:5 },
    Radiology: { doctor:"Vasikaran", time:"08:00PM-10:00PM", patientCount:5 },
    Dentist: { doctor:"Vasikaran", time:"08:00PM-10:00PM", patientCount:5 },
    Ophtamology: { doctor:"Vasikaran", time:"08:00PM-10:00PM", patientCount:5 },
  };

  const [timetable, setTimetable] = useState(defaultTimetable);

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    hospital: hospital,
    department: dept,
    usermail: usermail,
    username: "",
    doctor:" ",
  });

  const [remainingSlots, setRemainingSlots] = useState(0);
  const [snackOpen, setSnack] = useState(false);

  /* FETCH TIMETABLE */

  useEffect(() => {

    const fetchTimetable = async () => {

      try {

        const res = await axios.get(
          `http://localhost:3000/hospital/gettimetable/${hospital.hospitalId}`
        );
        // console.log("in appointent.jsx",res.data);
        if (res.data?.timetable) {
          setTimetable(res.data.timetable);
        }

      } catch (err) {

        console.log("Using default timetable", err);

      }

    };

    fetchTimetable();

  }, [hospital.hospitalId]);



  /* BOOK APPOINTMENT */

  const handleSnack = async () => {

    if (!appointment.time) {
      alert("Please select a date first");
      return;
    }

    try {

      await axios.post(
        "http://localhost:3000/appointments",
        appointment
      );

      setSnack(true);

    } catch (err) {

      console.log("BOOKING ERROR", err);

    }

  };



  /* HANDLE DATE SELECTION */

  const handleDate = async () => {

    try {

      const response = await axios.post(
        "http://localhost:3000/freeslots",
        {
          date: appointment.date,
          hospitalId: hospital.hospitalId,
          department: dept
        }
      );

      const booked = response.data.booked;

      const deptData = timetable?.[dept];

      if (!deptData) {
        console.log("Department not found:", dept);
        return;
      }

      const maxSlots = deptData.patientCount || 5;

      const remaining = maxSlots - booked;

      setRemainingSlots(Math.max(remaining, 0));

      setAppointment(appt => ({
        ...appt,
        time: deptData.time,
        doctor:timetable?.[dept]?.doctor || "Doctor not assigned",
      }));

    } catch (err) {

      console.log("ERROR FETCHING SLOTS", err);

    }

  };



  return (

    <div id={styles.container}>

      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <StaticDatePicker
          sx={{
            color:"black",
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-start",
            width:"320px"
          }}

          onChange={(newDate)=>{

            setAppointment({
              ...appointment,
              date:newDate.format("dddd, MMMM DD YYYY")
            });

            setSnack(false);

          }}

          onAccept={handleDate}

        />

      </LocalizationProvider>


      <div id={styles.box2}>

        <div id={styles.timebox}>

          <div
            className={`${styles.slotCard} ${remainingSlots === 0 ? styles.blockedCard : ""}`}
          >

            <div className={styles.slotTime}>
              {timetable?.[dept]?.time || "No slot"}
            </div>

            <div className={styles.slotDept}>
              {dept}
            </div>

            <div className={styles.slotDoctor}>
              Dr. {timetable?.[dept]?.doctor || "Doctor not assigned"}
            </div>

            <div className={styles.slotFree}>
              {remainingSlots === 0
                ? "NO SLOTS"
                : `${remainingSlots} slots left`}
            </div>

          </div>

        </div>


        <div id={styles.button}>

          <Snack open={snackOpen} />

          <Button
            onClick={handleSnack}
            sx={{
              backgroundColor:"#1976d2",
              color:"white"
            }}
          >
            Book
          </Button>

        </div>

      </div>

    </div>

  );
}