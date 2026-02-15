import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Location from '@mui/icons-material/LocationOnSharp';
import { MdCall } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {useState} from "react";
export default function BasicCard(props) {
  const navigate=useNavigate();
  const [hospital,setHospital]=useState(props);
  const handleAppointment=()=>{
    navigate("/book-appointment",{state:{hospital:hospital,dept:props.dept}});
  }
  return (
    <Card sx={{ width: props.sidebar?"410px":"330px" ,":hover":{transform:"scale(1.1)"},transition:"all 0.3s ease-in"}}>
      <div>
        <Typography level="title-lg">{props.name}</Typography>
        <Typography level="body-sm">{props.district}</Typography>
        <a href={props.location} target='_blank'>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <Location />
        </IconButton>
        </a>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={props.url}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          {/* <Typography level="body-xs">Rating:{props.rating}</Typography> */}
          
          <Rating name="half-rating-read" defaultValue={props.rating} precision={0.1} readOnly />
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg', width:'200px' }}><MdCall style={{marginRight:'10px'}} />{props.mobileno}</Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          onClick={()=>handleAppointment()}
        >
          Book Appointement
        </Button>
      </CardContent>
    </Card>
  );
}
