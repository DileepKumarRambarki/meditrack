import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState ,useEffect,useRef} from 'react';
import styles from "./Appointment.module.css"
import  Snack  from './Snack';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from "axios"
import { useAuth } from '../utils/Authcontext';
export default function ResponsiveDatePickers() {
  const {userId}=useAuth();
  const usermail=userId;
  const location=useLocation();
  // const [date, setDate]=useState(null);
  const [hospital,setHospital]=useState(location.state.hospital);
  const [dept,setDept]=useState(location.state.dept);
  // const [time,setTime]=useState(null);
  const [ appointment,setAppointment]=useState({date:"",time:"",hospital:hospital,department:dept, usermail:usermail, username:""});
  console.log(appointment);
  // const [bgcolor,setbgcolor]=useState("white");
  const timeslots=["10:00AM-10:30AM","10:30AM-11:00AM","11:30AM-12:00PM","12:00PM-12:30PM","02:00PM-02:30PM","02:30PM-03:00PM","03:00PM-03:30PM","03:30PM-04:00PM"];
  const [availableSlots,setAvailableslots]=useState([]);
  const [freeslots,setFreeslots]=useState([]);
  const [snackOpen,setSnack]=useState(false);
  const [color,setColor]=useState(-1);
  const timediv=useRef(null);
  const handleTimeColor=(index)=>{
   if(index==color){
    setColor(-1);
   }
   else{
    setColor(index);
    setAppointment(appt=>{return {...appt,time:timeslots[index]}});
   }
  }
  const handleSnack=async()=>{
    setSnack(true);
    const appt=await axios.post("http://localhost:3000/appointments",appointment);
  }
  const handleDate=async ()=>{
    const response=await axios.post("http://localhost:3000/freeslots",{date:appointment.date,hospitalId:hospital.hospitalId,department:dept});
    // console.log(response.data);

    const fslots=response.data.map(item=>item.time);
        setFreeslots(fslots);

    const availslots=timeslots.filter((slot)=>{
      return !fslots.includes(slot)
    });
    setAvailableslots(availslots);
    setColor(-1);
  }
  return (
    <div id={styles.container}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker  
          sx={{color:"black", display:"flex",flexDirection:"column",alignItems:"flex-start",width:"320px"}}
          onChange={(newDate)=>{setAppointment({...appointment,date:newDate.format("dddd, MMMM DD YYYY")});setColor(-1);setSnack(false);}}
          onAccept={handleDate}
          />
    </LocalizationProvider>
    <div id={styles.box2}>
    <div id={styles.timebox}>
      {
        availableSlots.length>0 && availableSlots.map((time,index)=>{
          
          return(
      <div id={styles.time} key={index} onClick={()=>handleTimeColor(index)}
      style={{backgroundColor:index===color?"rgb(252, 70, 100)":"white"}}>
        {time}
      </div>)
        })
      }
    </div>
    <div id={styles.button}>
    <Snack open={snackOpen}   />
    <Button
      onClick={handleSnack}
      sx={{backgroundColor:"#1976d2",color:"white"}}
    >
      Book
    </Button>
    </div>
    </div>
    </div>
  );
}
