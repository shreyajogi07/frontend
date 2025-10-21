import React, { useState } from "react";
import { TextField, Button, Container, Typography, Card, CardContent, Box } from "@mui/material";

const GroupVisitors = () => {
  const [visitors, setVisitors] = useState([{ name: "", email: "", phone: "" }]);
  const [submittedVisitors, setSubmittedVisitors] = useState([]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedVisitors = [...visitors];
    updatedVisitors[index][name] = value;
    setVisitors(updatedVisitors);
  };

  const addVisitor = () => {
    setVisitors([...visitors, { name: "", email: "", phone: "" }]);
  };

  const removeVisitor = (index) => {
    const updatedVisitors = visitors.filter((_, i) => i !== index);
    setVisitors(updatedVisitors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedVisitors(visitors);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Group Visitor Registration
      </Typography>

      <form onSubmit={handleSubmit}>
        {visitors.map((visitor, index) => (
          <Box key={index} sx={{ mb: 2, p: 2, border: "1px solid #ccc", borderRadius: "8px" }}>
            <Typography variant="h6">Visitor {index + 1}</Typography>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={visitor.name}
              onChange={(e) => handleChange(index, e)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={visitor.email}
              onChange={(e) => handleChange(index, e)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={visitor.phone}
              onChange={(e) => handleChange(index, e)}
              margin="normal"
              required
            />
            {index > 0 && (
              <Button onClick={() => removeVisitor(index)} color="error" sx={{ mt: 1 }}>
                Remove
              </Button>
            )}
          </Box>
        ))}

        <Button onClick={addVisitor} variant="outlined" sx={{ mb: 2 }}>
          + Add Another Visitor
        </Button>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      {submittedVisitors.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">Submitted Visitors</Typography>
          {submittedVisitors.map((visitor, index) => (
            <Card key={index} sx={{ mt: 2 }}>
              <CardContent>
                <Typography variant="h6">Visitor {index + 1}</Typography>
                <Typography>Name: {visitor.name}</Typography>
                <Typography>Email: {visitor.email}</Typography>
                <Typography>Phone: {visitor.phone}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default GroupVisitors;
