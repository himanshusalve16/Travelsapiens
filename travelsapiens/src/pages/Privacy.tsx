import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from '@mui/material';

const Privacy: React.FC = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h2" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Last updated: May 15, 2024
          </Typography>

          <Typography variant="body1" paragraph>
            At TravelSapiens, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website or use our services.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information that you provide directly to us, including:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Name, email address, and contact information</li>
            <li>Billing and payment information</li>
            <li>Travel preferences and requirements</li>
            <li>Passport and visa information when necessary</li>
            <li>Communication history with our team</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Process your bookings and payments</li>
            <li>Communicate with you about your travel arrangements</li>
            <li>Send you important updates and notifications</li>
            <li>Improve our services and customer experience</li>
            <li>Comply with legal obligations</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Information Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We may share your information with:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Travel service providers (hotels, airlines, etc.)</li>
            <li>Payment processors and financial institutions</li>
            <li>Government authorities when required by law</li>
            <li>Third-party service providers who assist in our operations</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate security measures to protect your personal information, including:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Encryption of sensitive data</li>
            <li>Secure servers and networks</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal information</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>File a complaint with relevant authorities</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Cookies and Tracking
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies and similar tracking technologies to:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Remember your preferences</li>
            <li>Analyze website traffic</li>
            <li>Personalize your experience</li>
            <li>Improve our services</li>
          </Typography>

          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <Typography variant="body1" paragraph>
            Email: privacy@travelsapiens.com<br />
            Phone: +91 123 456 7890<br />
            Address: 123 Travel Street, Mumbai, Maharashtra, India
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" color="text.secondary">
            This privacy policy is subject to change without notice and was last updated on May 15, 2024.
            If you have any questions about this policy, please contact us.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Privacy; 