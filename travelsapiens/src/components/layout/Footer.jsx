import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              TravelSapiens
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Your trusted partner for unforgettable Indian adventures. We specialize in creating 
              personalized travel experiences that showcase the best of India's culture, 
              heritage, and natural beauty.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              {[
                { text: 'About Us', path: '/about' },
                { text: 'Tour Packages', path: '/tour-packages' },
                { text: 'Destinations', path: '/destinations' },
                { text: 'Travel Blog', path: '/blog' },
                { text: 'Privacy Policy', path: '/privacy' },
                { text: 'Terms & Conditions', path: '/terms' },
              ].map((item) => (
                <Box component="li" key={item.text} sx={{ py: 0.5 }}>
                  <Link
                    component={RouterLink}
                    to={item.path}
                    color="text.secondary"
                    sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    {item.text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    123 Travel Street, Mumbai, Maharashtra, India
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    +91 123 456 7890
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    info@travelsapiens.com
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} TravelSapiens. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 