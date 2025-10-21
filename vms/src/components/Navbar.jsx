import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Visitor Management System
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
        <Button color="inherit" component={Link} to="/visit-details">Visit Details</Button>
        <Button color="inherit" component={Link} to="/identity-verification">Verification</Button>
        <Button color="inherit" component={Link} to="/vehicle-info">Vehicle Info</Button>
        <Button color="inherit" component={Link} to="/group-visitors">Group Visitors</Button>
        <Button color="inherit" component={Link} to="/check-in">Check-in</Button>
        <Button color="inherit" component={Link} to="/entry-pass">Entry Pass</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
