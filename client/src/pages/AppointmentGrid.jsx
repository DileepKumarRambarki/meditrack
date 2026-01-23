import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import {useAuth} from '../utils/Authcontext';
const AppointmentGrid=()=>{
  const usermail=useAuth().usermail;
  const [appointments,setAppointments]=useState([{time:"",date:"",hospital:""}]);
  const getAppointments=async()=>{
    const appointmentList=await axios.post("http://localhost:3000/getappointments",{usermail:usermail});
    console.log("appintment list: ",appointmentList.data);
    setAppointments(appointmentList.data.map(item=>{
      return {
        time:item.time,
        date:item.date,
        hospital:item.hospital
      }
    
    }));
  }
  useEffect(()=>{
    getAppointments();
  },[]);
    return(
      <div style={{width:"100%",display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {
          appointments.map((item,index)=>{
            return(
              <DateCard item={item}/>
            )
          })
        }
      </div>
    )
}
const DateCard = (props) => {
  return (
    <StyledWrapper>
      <div className="card">
        <p className="time-text">{props.item.time}<span className="time-sub-text"></span></p>
        <p className="day-text">{props.item.date}</p>
        <p className='hospital'>{props.item.hospital}</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
    width:fit-content;
  .card {
    width: 344px;
    height: 214px;
    background: rgb(17, 4, 134);
    border-radius: 15px;
    // box-shadow: rgb(0,0,0,0.7) 5px 10px 50px ,rgb(0,0,0,0.7) -5px 0px 250px;
    display: flex;
    color: white;
    justify-content: center;
    position: relative;
    flex-direction: column;
    background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    padding:0;
  }

  .card:hover {
    box-shadow: rgb(0,0,0) 5px 10px 50px ;
  }

  .time-text {
    font-size: 25px;
    margin-top: 0px;
    margin-bottom: 10px;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .time-sub-text {
    font-size: 15px;
    margin-left: 5px;
  }

  .day-text {
    font-size: 18px;
    margin-top: 0px;
    margin-left: 15px;
    font-weight: 500;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .hospital{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:25px;
    margin:0;
  }
  .moon {
    font-size: 20px;
    position: absolute;
    right: 15px;
    top: 15px;
    transition: all 0.3s ease-in-out;
  }

  .card:hover > .moon {
    font-size: 23px;
  }`;

export default AppointmentGrid;
