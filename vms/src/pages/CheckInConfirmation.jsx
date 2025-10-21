import React from "react";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CheckInConfirmation = ({ visitor }) => {
  const navigate = useNavigate();

  if (!visitor) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h5" color="error" align="center" sx={{ mt: 5 }}>
          No visitor data found. Please check-in first.
        </Typography>
      </Container>
    );
  }

  const { name, email, phone, checkInTime, passId } = visitor;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ p: 3, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Check-In Successful ✅
          </Typography>
          <Typography variant="h6">{name}</Typography>
          <Typography>Email: {email}</Typography>
          <Typography>Phone: {phone}</Typography>
          <Typography>Check-In Time: {checkInTime}</Typography>
          <Typography>Pass ID: {passId}</Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={() => navigate("/entry-pass", { state: { visitor } })}
          >
            Generate Entry Pass
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CheckInConfirmation;
