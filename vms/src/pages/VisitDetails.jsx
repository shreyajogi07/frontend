import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const VisitDetails = () => {
  const [visit, setVisit] = useState({ purpose: "", department: "", host: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setVisit({ ...visit, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Visit Details:", visit);
    navigate("/identity-verification");
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Visit Details</Typography>
      <TextField label="Purpose" name="purpose" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Department" name="department" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Host Name" name="host" fullWidth margin="normal" onChange={handleChange} />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
        Next: Identity Verification
      </Button>
    </Container>
  );
};

export default VisitDetails;
