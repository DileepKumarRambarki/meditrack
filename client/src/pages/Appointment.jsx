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
export default function ResponsiveDatePickers() {
  const [date, setDate]=useState(null);
  const [time,setTime]=useState(null);
  const [ appointment,setAppointment]=useState({date:"",time:""});
  const [bgcolor,setbgcolor]=useState("white");
  const [timeslots,setTimeslots]=useState(["10:30AM-11:00AM","11:30AM-12:00PM","02:00PM-02:30PM"]);
  const [snackOpen,setSnack]=useState(false);
  const [color,setColor]=useState(-1);
  const timediv=useRef(null);
  const handleTimeColor=(index)=>{
   if(index==color){
    setColor(-1);
   }
   else{
    setColor(index);
    setAppointment({...appointment,time:timeslots[index]});
   }
  }
  const handleSnack=()=>{
    setSnack(true);
    console.log(appointment);
  }
  return (
    <div id={styles.container}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker  
          sx={{color:"black", display:"flex",flexDirection:"column",alignItems:"flex-start",width:"320px"}}
          onChange={(newDate)=>setAppointment({...appointment,date:newDate.format("DD/MM/YYYY")})}
          />
    </LocalizationProvider>
    <div id={styles.box2}>
    <div id={styles.timebox}>
      {
        timeslots.map((time,index)=>{
          return(
      <div id={styles.time} key={index} onClick={()=>handleTimeColor(index)}
      style={{backgroundColor:index===color?"rgb(252, 70, 100)":"white"}}>
        {time}
      </div>)
        })
      }
    </div>
    <div id={styles.button}>
    <Snack open={snackOpen}/>
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
