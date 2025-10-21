import React, { useState } from "react";
import { TextField, Button, Container, Typography, Card, CardContent, Input, Box } from "@mui/material";

const IdentityVerification = () => {
  const [identityData, setIdentityData] = useState({
    idNumber: "",
    idFile: null,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setIdentityData({ ...identityData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setIdentityData({ ...identityData, idFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(identityData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Identity Verification
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="ID Number"
          name="idNumber"
          value={identityData.idNumber}
          onChange={handleChange}
          margin="normal"
          required
        />

        <Box mt={2}>
          <Typography variant="subtitle1">Upload ID Document</Typography>
          <Input type="file" onChange={handleFileChange} required />
        </Box>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>

      {submittedData && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6">Submitted Identity Details</Typography>
            <Typography>🆔 ID Number: {submittedData.idNumber}</Typography>

            {submittedData.idFile && (
              <Box mt={2}>
                <Typography variant="subtitle1">Uploaded ID:</Typography>
                <img
                  src={URL.createObjectURL(submittedData.idFile)}
                  alt="Uploaded ID"
                  style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "8px" }}
                />
              </Box>
            )}
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default IdentityVerification;
