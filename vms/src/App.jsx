import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VisitorRegistration from "./pages/VisitorRegistration";
import VisitDetails from "./pages/VisitDetails";
import IdentityVerification from "./pages/IdentityVerification";
import VehicleInfo from "./pages/VehicleInfo.jsx";
import GroupVisitors from "./pages/GroupVisitors";
import CheckInConfirmation from "./pages/CheckInConfirmation";
import EntryPass from "./pages/EntryPass";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container sx={{ marginTop: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<VisitorRegistration />} />
          <Route path="/visit-details" element={<VisitDetails />} />
          <Route path="/identity-verification" element={<IdentityVerification />} />
          <Route path="/vehicle-info" element={<VehicleInfo />} />
          <Route path="/group-visitors" element={<GroupVisitors />} />
          <Route path="/check-in" element={<CheckInConfirmation />} />
          <Route path="/entry-pass" element={<EntryPass />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
