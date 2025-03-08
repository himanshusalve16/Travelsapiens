import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Flight, EmojiPeople, Favorite, Public } from '@mui/icons-material';

const About: React.FC = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        {/* Hero Section */}
        <Typography variant="h2" align="center" gutterBottom>
          About TravelSapiens
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Your Trusted Travel Partner in India
        </Typography>

        {/* Company Overview */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              Founded in 2020, TravelSapiens emerged from a passion for showcasing
              India's rich cultural heritage and diverse landscapes to travelers
              from around the world. What started as a small team of travel
              enthusiasts has grown into a full-service travel agency, dedicated to
              creating unforgettable experiences.
            </Typography>
            <Typography paragraph>
              Our mission is to make Indian travel experiences accessible,
              authentic, and memorable. We believe in sustainable tourism that
              benefits local communities while providing our clients with
              immersive cultural experiences.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'primary.main',
                color: 'white',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Quick Facts
              </Typography>
              <Grid container spacing={2}>
                {[
                  { number: '10,000+', label: 'Happy Travelers' },
                  { number: '500+', label: 'Tour Packages' },
                  { number: '100+', label: 'Destinations' },
                  { number: '50+', label: 'Expert Guides' },
                ].map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <Typography variant="h3" gutterBottom>
                      {stat.number}
                    </Typography>
                    <Typography variant="subtitle1">
                      {stat.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Our Values */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <EmojiPeople fontSize="large" />,
                title: 'Customer First',
                description:
                  "We prioritize our customers' needs and preferences in everything we do.",
              },
              {
                icon: <Favorite fontSize="large" />,
                title: 'Passion for Travel',
                description:
                  'Our team shares a deep passion for travel and cultural exchange.',
              },
              {
                icon: <Public fontSize="large" />,
                title: 'Sustainable Tourism',
                description:
                  'We promote responsible travel that respects local communities and the environment.',
              },
              {
                icon: <Flight fontSize="large" />,
                title: 'Excellence',
                description:
                  'We strive for excellence in service quality and customer satisfaction.',
              },
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: 'primary.light',
                      borderRadius: '50%',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Company Timeline */}
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            Our Journey
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">2020</Typography>
                  <Typography>TravelSapiens was founded</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">2021</Typography>
                  <Typography>Expanded to 50+ destinations</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">2022</Typography>
                  <Typography>Launched luxury tour packages</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
              </TimelineSeparator>
              <TimelineContent>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">2023</Typography>
                  <Typography>Achieved 10,000+ happy customers</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 