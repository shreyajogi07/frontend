import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const VisitorRegistration = () => {
  const [visitor, setVisitor] = useState({ name: "", phone: "", company: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setVisitor({ ...visitor, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Visitor Registered:", visitor);
    navigate("/visit-details");
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Visitor Registration</Typography>
      <TextField label="Full Name" name="name" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Phone Number" name="phone" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Company Name" name="company" fullWidth margin="normal" onChange={handleChange} />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
        Next: Visit Details
      </Button>
    </Container>
  );
};

export default VisitorRegistration;
