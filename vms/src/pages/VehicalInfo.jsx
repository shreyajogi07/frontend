import React, { useState } from "react";
import { TextField, Button, Container, Typography, Card, CardContent, MenuItem } from "@mui/material";

const VehicleInfo = () => {
  const [vehicleData, setVehicleData] = useState({
    vehicleNumber: "",
    vehicleType: "",
    ownerName: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const vehicleTypes = ["Car", "Bike", "Truck", "Bus", "Other"];

  const handleChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(vehicleData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Vehicle Information
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Vehicle Number"
          name="vehicleNumber"
          value={vehicleData.vehicleNumber}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          select
          label="Vehicle Type"
          name="vehicleType"
          value={vehicleData.vehicleType}
          onChange={handleChange}
          margin="normal"
          required
        >
          {vehicleTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          label="Owner Name"
          name="ownerName"
          value={vehicleData.ownerName}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>

      {submittedData && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6">Submitted Vehicle Details</Typography>
            <Typography>🚗 Vehicle Number: {submittedData.vehicleNumber}</Typography>
            <Typography>🛞 Vehicle Type: {submittedData.vehicleType}</Typography>
            <Typography>👤 Owner Name: {submittedData.ownerName}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default VehicleInfo;
