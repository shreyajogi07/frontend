import React from "react";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";
import QRCode from "react-qr-code";

const EntryPass = ({ visitor }) => {
  if (!visitor) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h5" color="error" align="center" sx={{ mt: 5 }}>
          No visitor data found. Please check-in first.
        </Typography>
      </Container>
    );
  }

  const { name, email, phone, entryTime, passId } = visitor;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ p: 3, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Entry Pass
          </Typography>
          <Typography variant="h6">{name}</Typography>
          <Typography>Email: {email}</Typography>
          <Typography>Phone: {phone}</Typography>
          <Typography>Entry Time: {entryTime}</Typography>
          <Typography>Pass ID: {passId}</Typography>

          {/* QR Code for verification */}
          <QRCode value={passId || "N/A"} size={150} style={{ marginTop: 20 }} />

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={() => window.print()}
          >
            Print Pass
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EntryPass;
