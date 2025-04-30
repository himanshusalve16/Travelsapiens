import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  CardActions,
} from '@mui/material';
import { AccessTime, Person } from '@mui/icons-material';

const blogPosts = [
  {
    id: 1,
    title: 'Essential Trekking Gear for Himalayan Adventures',
    image: 'https://himalayandreamtreks.in/wp-content/uploads/2024/05/Trek-Gears-1.webp',
    description: `A comprehensive guide to packing for your Himalayan trek. Learn about essential gear, clothing, and equipment you'll need for a safe and comfortable trekking experience.`,
    author: 'Rahul Sharma',
    date: 'May 15, 2024',
    category: 'Trekking Tips',
    readTime: '8 min read',
    content: `
      1. Clothing Essentials:
      - Insulating mid-layers
      - Waterproof outer shell
      - Sturdy trekking pants
      - Warm socks and gloves

      2. Footwear:
      - High-quality trekking boots
      - Trail running shoes as backup
      - Camp sandals

      3. Equipment:
      - Backpack (40-60L)
      - Trekking poles
      - Sleeping bag (-10°C rating)
      - Headlamp with extra batteries

      4. Safety Gear:
      - First aid kit
      - Emergency shelter
      - Multi-tool or knife
      - Navigation tools
    `,
  },
  {
    id: 2,
    title: 'Travel Safety Tips for Solo Travelers in India',
    image: 'https://cdn.prod.website-files.com/60100d26d33c7cce48258afd/6633d21619ea53a6ae3db526_banner.webp',
    description: 'Important safety guidelines and tips for solo travelers exploring India. From transportation to accommodation, learn how to stay safe while having an amazing journey.',
    author: 'Priya Patel',
    date: 'May 12, 2024',
    category: 'Travel Safety',
    readTime: '6 min read',
    content: `
      1. Pre-Trip Preparation:
      - Research your destinations thoroughly
      - Book accommodations in advance
      - Share your itinerary with family/friends
      - Get travel insurance
      
      2. Transportation Safety:
      - Use registered taxis or ride-sharing apps
      - Travel in women-only train compartments
      - Keep emergency contacts handy
      - Avoid late-night travel
      
      3. Personal Safety:
      - Dress appropriately for the location
      - Keep valuables secure
      - Stay aware of your surroundings
      - Trust your instincts
      
      4. Health Precautions:
      - Carry basic medicines
      - Drink bottled water
      - Be careful with street food
      - Keep emergency numbers saved
    `,
  },
  {
    id: 3,
    title: 'Monsoon Travel Guide: Best Practices and Destinations',
    image: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/09/shutterstock_787033735.webp',
    description: 'Make the most of your monsoon travels with these expert tips and discover the best destinations to visit during the rainy season.',
    author: 'Amit Kumar',
    date: 'May 10, 2024',
    category: 'Season Guide',
    readTime: '7 min read',
    content: `
      1. Best Monsoon Destinations:
      - Kerala backwaters
      - Valley of Flowers, Uttarakhand
      - Coorg, Karnataka
      - Cherrapunji, Meghalaya
      
      2. Packing Essentials:
      - Waterproof backpack
      - Rain jacket or umbrella
      - Quick-dry clothing
      - Waterproof footwear
      
      3. Travel Tips:
      - Check weather forecasts regularly
      - Book refundable accommodations
      - Keep buffer days in itinerary
      - Carry waterproof bags for electronics
      
      4. Health Precautions:
      - Stay updated on road conditions
      - Carry mosquito repellent
      - Pack water-resistant sunscreen
      - Bring basic medications
    `,
  },
];

const Blog: React.FC = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Travel Blog
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Expert tips and guides for your Indian adventures
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item key={post.id} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={post.category}
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: 'text.secondary',
                    }}
                  >
                    <Person sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body2" sx={{ mr: 2 }}>
                      {post.author}
                    </Typography>
                    <AccessTime sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body2">{post.readTime}</Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: 'pre-line',
                      mb: 2,
                    }}
                  >
                    {post.content}
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

export default Blog; 