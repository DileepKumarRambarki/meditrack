import {
    TextField,
    Button,
    Box,
    Typography,
    Container,
    CssBaseline,
  } from "@mui/material";
  import{Link} from "react-router-dom";
  import React from "react";
  import axios from "axios"
  import logo from "../assets/logo.png";
  import { useAuth } from "../utils/Authcontext";
  import { useNavigate } from "react-router-dom";
  const Login = () => {
    const navigate=useNavigate();
    const {login}=useAuth();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");
  
      console.log("Form submitted:", { email, password });
      const response=await axios.post("http://localhost:3000/login/",{usermail:email,password:password});
      if(response && response.data==="valid user"){
        login(email);
        navigate("/home");
      }
    };
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"flex-start",
          }}
        >
             <Box
        component="img"
        src={logo}
        alt="MediTrack Logo"
        sx={{ width: 150, height: 'auto', mb: 2 }}
      />
          <Typography component="h1" variant="h5">
            Sign In
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
              id="email"
              label="Email Address/Mobile"
              name="email"
              autoComplete="email"
              autoFocus
            />
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
              Sign In
            </Button>
          </Box>
        </Box>
  
        <p>
            Not having an account? <Link to="/VSignup">Sign Up</Link>
            </p>
  
      </Container>
    );
  };
  
  export default Login;
  