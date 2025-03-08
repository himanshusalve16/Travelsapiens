import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from '@mui/material';

const Terms: React.FC = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h2" gutterBottom>
            Terms and Conditions
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Last updated: May 15, 2024
          </Typography>

          <Typography variant="body1" paragraph>
            Please read these terms and conditions carefully before using our services.
            By booking with TravelSapiens, you agree to be bound by these terms.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom>
            Booking and Payment
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>A minimum 25% advance payment is required to confirm your booking</li>
            <li>Full payment must be made 30 days before the trip start date</li>
            <li>For bookings made within 30 days of departure, full payment is required</li>
            <li>All payments must be made in Indian Rupees (INR)</li>
            <li>Payment can be made via bank transfer, credit card, or digital payment methods</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Cancellation Policy
          </Typography>
          <Typography variant="body1" paragraph>
            Cancellation charges will be applied based on the following schedule:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>More than 30 days before departure: 10% of total tour cost</li>
            <li>15-30 days before departure: 25% of total tour cost</li>
            <li>7-14 days before departure: 50% of total tour cost</li>
            <li>Less than 7 days before departure: 100% of total tour cost</li>
            <li>No-show: No refund will be provided</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Refund Policy
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Refunds will be processed within 7-14 business days</li>
            <li>Refund amount will be calculated after deducting cancellation charges</li>
            <li>Bank charges for refund transfer will be borne by the customer</li>
            <li>Refunds will be made to the original payment method</li>
            <li>Partial refunds may be offered for unused services</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Special Circumstances
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Force majeure events may lead to tour modifications or cancellations</li>
            <li>Weather-related changes will be handled on a case-by-case basis</li>
            <li>Medical emergencies may qualify for special consideration</li>
            <li>Government travel restrictions may affect refund policies</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Tour Modifications
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>TravelSapiens reserves the right to modify itineraries if necessary</li>
            <li>Changes will be communicated as early as possible</li>
            <li>Significant changes may qualify for full refunds</li>
            <li>Alternative arrangements will be offered when possible</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Travel Insurance
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Travel insurance is highly recommended for all tours</li>
            <li>Insurance should cover trip cancellation and medical emergencies</li>
            <li>TravelSapiens can assist in arranging travel insurance</li>
            <li>Insurance claims must be filed directly with the insurance provider</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Responsibilities
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Travelers must have valid travel documents</li>
            <li>Compliance with local laws and regulations is mandatory</li>
            <li>Personal belongings are the responsibility of travelers</li>
            <li>TravelSapiens is not liable for third-party services</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Dispute Resolution
          </Typography>
          <Typography variant="body1" paragraph>
            Any disputes will be subject to the jurisdiction of Mumbai, Maharashtra, India.
            We encourage resolving issues through mutual discussion before pursuing legal action.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" color="text.secondary">
            These terms and conditions are subject to change without notice and were last
            updated on May 15, 2024. By proceeding with a booking, you acknowledge that
            you have read, understood, and agreed to these terms and conditions.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Terms; 