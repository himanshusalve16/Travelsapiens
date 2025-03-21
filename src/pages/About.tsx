import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { 
  Flight, 
  EmojiPeople, 
  Favorite, 
  Public, 
  Phone, 
  Email, 
  LocationOn,
  WhatsApp 
} from '@mui/icons-material';

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const contactWhatsApp = () => {
    const phoneNumber = '919876543210'; // Replace with your WhatsApp number
    const message = 'Hi, I would like to know more about your travel packages.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Box sx={{ py: { xs: 4, sm: 6 } }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            fontSize: { xs: '1.75rem', sm: '2.5rem' },
            mb: { xs: 2, sm: 3 }
          }}
        >
          About TravelSapiens
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ 
            mb: { xs: 4, sm: 6 },
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Your Trusted Travel Partner in India
        </Typography>

        {/* Company Overview */}
        <Grid container spacing={4} sx={{ mb: { xs: 5, sm: 8 } }}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
            >
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
                p: { xs: 2, sm: 3 },
                backgroundColor: 'primary.main',
                color: 'white',
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom
                sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
              >
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
                    <Typography 
                      variant="h3" 
                      gutterBottom
                      sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
                    >
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
        <Box sx={{ mb: { xs: 5, sm: 8 } }}>
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, mb: { xs: 3, sm: 4 } }}
          >
            Our Values
          </Typography>
          <Grid container spacing={3}>
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
                    p: { xs: 2, sm: 3 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 1.5, sm: 2 },
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
        <Box sx={{ mb: { xs: 5, sm: 8 } }}>
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, mb: { xs: 3, sm: 4 } }}
          >
            Our Journey
          </Typography>
          <Timeline position={isMobile ? "right" : "alternate"}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper sx={{ p: { xs: 1.5, sm: 2 } }}>
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
                <Paper sx={{ p: { xs: 1.5, sm: 2 } }}>
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
                <Paper sx={{ p: { xs: 1.5, sm: 2 } }}>
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
                <Paper sx={{ p: { xs: 1.5, sm: 2 } }}>
                  <Typography variant="h6">2023</Typography>
                  <Typography>Achieved 10,000+ happy customers</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
        
        {/* Contact Information Section */}
        <Box sx={{ mb: { xs: 5, sm: 8 } }}>
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary" 
            sx={{ 
              mb: { xs: 4, sm: 6 },
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            Have questions or need assistance? We're here to help!
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Paper sx={{ p: { xs: 2, sm: 4 }, height: '100%' }}>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  color="primary.main"
                  sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
                >
                  Get In Touch
                </Typography>
                <Typography paragraph>
                  Feel free to contact us for any questions, customization requests, or travel advice. 
                  Our travel experts are ready to assist you in planning your perfect Indian adventure.
                </Typography>
                
                <Grid container spacing={isMobile ? 2 : 4} sx={{ mt: { xs: 1, sm: 2 } }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                      <LocationOn color="primary" sx={{ fontSize: { xs: 24, sm: 28 } }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Our Location
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          123 Travel Street, Mumbai, Maharashtra, India
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Email color="primary" sx={{ fontSize: { xs: 24, sm: 28 } }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Email Us
                        </Typography>
                        <Link 
                          href="mailto:info@travelsapiens.com" 
                          underline="hover"
                          color="text.secondary"
                        >
                          <Typography variant="body2">
                            info@travelsapiens.com
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                      <Phone color="primary" sx={{ fontSize: { xs: 24, sm: 28 } }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Call Us
                        </Typography>
                        <Link 
                          href="tel:+911234567890" 
                          underline="hover"
                          color="text.secondary"
                        >
                          <Typography variant="body2">
                            +91 123 456 7890
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <WhatsApp sx={{ color: '#25D366', fontSize: { xs: 24, sm: 28 } }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          WhatsApp
                        </Typography>
                        <Link 
                          component="button"
                          onClick={contactWhatsApp}
                          underline="hover"
                          color="text.secondary"
                        >
                          <Typography variant="body2">
                            Chat with us on WhatsApp
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                
                <Divider sx={{ my: { xs: 3, sm: 4 } }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<WhatsApp />}
                    onClick={contactWhatsApp}
                    size={isMobile ? "medium" : "large"}
                    sx={{ 
                      py: isMobile ? 1 : 1.5, 
                      px: isMobile ? 2 : 3,
                      backgroundColor: '#25D366',
                      '&:hover': {
                        backgroundColor: '#128C7E',
                      }
                    }}
                  >
                    Start a Conversation
                  </Button>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Paper 
                sx={{ 
                  p: { xs: 2, sm: 4 }, 
                  height: '100%',
                  backgroundColor: 'primary.main',
                  color: 'white'
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
                >
                  Business Hours
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="body1">Monday - Friday:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">9:00 AM - 6:00 PM</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">Saturday:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">10:00 AM - 4:00 PM</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">Sunday:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">Closed</Typography>
                    </Grid>
                  </Grid>
                </Box>
                
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    mt: 4,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' } 
                  }}
                >
                  Emergency Contact
                </Typography>
                <Typography variant="body1" paragraph>
                  For urgent travel assistance (for customers on tour):
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  +91 987 654 3210
                </Typography>
                
                <Box sx={{ mt: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
                  >
                    Follow Us
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Stay updated with our latest offers, travel tips, and destination guides.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
                    {/* Social Media Icons */}
                    {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                      <Paper 
                        key={social}
                        sx={{ 
                          width: { xs: 36, sm: 40 }, 
                          height: { xs: 36, sm: 40 }, 
                          display: 'flex', 
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          '&:hover': { bgcolor: 'primary.dark' }
                        }}
                      >
                        <Typography variant="body2" color="primary.main">
                          {social.charAt(0)}
                        </Typography>
                      </Paper>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 