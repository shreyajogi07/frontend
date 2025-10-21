import React from "react";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ marginY: 3 }}>
        Welcome to the Visitor Management System
      </Typography>
      <Typography align="center">
        A modern solution for secure and efficient visitor check-ins.
      </Typography>
    </Container>
  );
};

export default Home;
