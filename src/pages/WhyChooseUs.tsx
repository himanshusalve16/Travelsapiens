import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from '@mui/material';
import {
  Security,
  LocalOffer,
  EmojiPeople,
  Support,
  Payment,
  ThumbUp,
} from '@mui/icons-material';

const features = [
  {
    icon: <Security fontSize="large" />,
    title: 'Safe & Secure',
    description: 'Your safety is our top priority with trusted partners and 24/7 support',
  },
  {
    icon: <LocalOffer fontSize="large" />,
    title: 'Best Price Guarantee',
    description: 'We offer competitive prices and match any lower price you find',
  },
  {
    icon: <EmojiPeople fontSize="large" />,
    title: 'Expert Guides',
    description: 'Our experienced local guides ensure an authentic travel experience',
  },
  {
    icon: <Support fontSize="large" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs',
  },
  {
    icon: <Payment fontSize="large" />,
    title: 'Flexible Payment',
    description: 'Multiple payment options and easy installment plans available',
  },
  {
    icon: <ThumbUp fontSize="large" />,
    title: 'Satisfaction Guaranteed',
    description: '98% of our customers rate us excellent for service and value',
  },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi',
    rating: 5,
    comment: 'Amazing experience with TravelSapiens! The Golden Triangle tour was perfectly organized.',
    image: '/images/testimonial1.jpg',
  },
  {
    name: 'Priya Patel',
    location: 'Mumbai',
    rating: 5,
    comment: 'The Kerala backwaters tour exceeded our expectations. Highly recommended!',
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'John Smith',
    location: 'UK',
    rating: 5,
    comment: 'Professional service and great attention to detail. Will definitely book again!',
    image: '/images/testimonial3.jpg',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        {/* Features Section */}
        <Typography variant="h2" align="center" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Discover what makes us the perfect travel partner
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 64,
                    height: 64,
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Testimonials Section */}
        <Typography variant="h3" align="center" gutterBottom>
          What Our Customers Say
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Real experiences from real travelers
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body1" color="text.secondary">
                    "{testimonial.comment}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs; 