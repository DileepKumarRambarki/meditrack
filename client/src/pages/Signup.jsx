import {
  Box, Button, Container,
  CssBaseline, TextField, Typography
} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Authcontext";

const Signup = () => {
    const [gender,setGender]=useState("male");
    let user={};
    const navigate=useNavigate();
    const {login}=useAuth();
    const handleSubmit =async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const username = formData.get("name");
      const usermail = formData.get("email");
      const mobile = formData.get("mobile");
      const age = formData.get("age");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");
  
      if (password !== confirmPassword) {
        console.log("Passwords do not match!");
      } else {
        user={ username, usermail,mobile,age,gender ,password };
        console.log("Form submitted:", user);
      }
      const postUser=await axios.post("http://localhost:3000/signup",user);
      console.log(postUser);
      if(postUser.data==="user already exists"){
        console.log("user already exists");
      }
      else{
        login({
          role: "patient",
          userId: usermail,
        });
        navigate("/");
      }
    };
    const handlegenderChange=(event)=>{
        setGender(event.target.value);
    }
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile"
              name="mobile"
              autoComplete="mobile"
            />
            <Box sx={{
                width:"100%",
                display:"flex",
                justifyContent:"space-between"
            }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              type="Number"
              label="age"
              name="age"
              autoComplete="number"
              sx={{width:"30%"}}
            />
            <FormControl sx={{width:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={gender}
    label="gender"
    onChange={handlegenderChange}
    sx={{width:"100%"}}
  >
    <MenuItem value="male">Male</MenuItem>
    <MenuItem value="female">Female</MenuItem>
    <MenuItem value="lqbtq">LGBTQ</MenuItem>
  </Select>
</FormControl>
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#dc143c",
                ":hover": {
                  bgcolor: "#a10f2d",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
          </p>
      </Container>
    );
  };
  
  export default Signup;
  