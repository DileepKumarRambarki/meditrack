import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CssBaseline,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { useAuth } from "../utils/Authcontext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("patient"); // patient | hospital
  const [error, setError] = useState("");

  const handleRoleChange = (event, newRole) => {
    if (newRole !== null) {
      setRole(newRole);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const emailOrId = formData.get("emailOrId");
    const password = formData.get("password");

    try {
      let response;

      if (role === "patient") {
        // 🔹 Patient Login API
        response = await axios.post("http://localhost:3000/login", {
          usermail: emailOrId,
          password: password,
        });

        if (response.data === "valid user") {
          login({
            role: "patient",
            userId: emailOrId,
          });
          navigate("/");
        }
      } else {
        // 🔹 Hospital Login API
        // response = await axios.post("http://localhost:3000/hospital/login", {
        //   hospitalId: emailOrId
        // });

        // if (response.data === "valid hospital") {
          login({
            role: "hospital",
            userId: emailOrId,
          });
          navigate("/hospital");
        // }
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      console.error(err);
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
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="MediTrack Logo"
          sx={{ width: 150, height: "auto", mb: 2 }}
        />

        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        {/* 🔥 Toggle Button */}
        <ToggleButtonGroup
          value={role}
          exclusive
          onChange={handleRoleChange}
          sx={{ mt: 2 }}
          fullWidth
        >
          <ToggleButton value="patient">Patient</ToggleButton>
          <ToggleButton value="hospital">Hospital</ToggleButton>
        </ToggleButtonGroup>

        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="emailOrId"
            label={role === "patient" ? "Email Address" : "Hospital ID"}
            name="emailOrId"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
          />

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

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
            {role === "patient" ? "Sign In as Patient" : "Sign In as Hospital"}
          </Button>
        </Box>
      </Box>

      {role === "patient" && (
        <p>
          Not having an account? <Link to="/signup">Sign Up</Link>
        </p>
      )}
    </Container>
  );
};

export default Login;
