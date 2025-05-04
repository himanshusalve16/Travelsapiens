import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Autocomplete,
  TextField,
  Rating,
  Avatar,
  Divider,
  ImageList,
  ImageListItem,
  Chip,
} from '@mui/material';
import {
  Search,
  ArrowForward,
  LocationOn,
  AccessTime,
  Group,
  FormatQuote,
  Email,
  DirectionsBus,
  Hotel,
  Restaurant,
  LocalActivity,
  Celebration,
  CameraAlt,
  People,
  Flight,
} from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const heroImages = [
  'https://static.wixstatic.com/media/3eb94e_0105354fad944a61ab0277259a645da4~mv2.jpg/v1/fill/w_1200,h_352,al_c,q_85,enc_avif,quality_auto/3eb94e_0105354fad944a61ab0277259a645da4~mv2.jpg',
  'https://spitiholidayadventure.com/storage/5970aa504f376.jpg',
  'https://discoverwithdheeraj.com/wp-content/uploads/2018/09/Spiti-Valley-in-February.jpg',
  'https://www.youthcamping.in/system/images/000/751/388/1994a75ffd71ebbefacda7b0368c4058/original/Untitled_design__46_.png?1713687964',
];

// Combined search suggestions from destinations and tour packages
const searchSuggestions = [
  // Destinations
  { title: 'Taj Mahal, Agra', type: 'destination', path: '/destinations' },
  { title: 'Kerala Backwaters', type: 'destination', path: '/destinations' },
  { title: 'Rajasthan Heritage', type: 'destination', path: '/destinations' },
  { title: 'Himalayan Adventure', type: 'destination', path: '/destinations' },
  // Tour Packages
  { title: 'Golden Triangle Tour', type: 'package', path: '/tour-packages' },
  { title: 'Kerala Backwaters Cruise', type: 'package', path: '/tour-packages' },
  { title: 'Himalayan Adventure Trek', type: 'package', path: '/tour-packages' },
];

const featuredDestinations = [
  {
    id: 1,
    title: 'Taj Mahal, Agra',
    image: 'https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=',
    description: 'Experience the magnificent symbol of eternal love',
    price: 'From ₹15,000',
  },
  {
    id: 2,
    title: 'Kerala Backwaters',
    image: 'https://www.peakadventuretour.com/assets/imgs/kerala-tourism-04.webp',
    description: 'Cruise through serene backwaters in a houseboat',
    price: 'From ₹20,000',
  },
  {
    id: 3,
    title: 'Rajasthan Heritage',
    image: 'https://www.jaisalkot.com/wp-content/uploads/2018/03/AdobeStock_103261625-Latest.jpg',
    description: 'Explore royal palaces and majestic forts',
    price: 'From ₹25,000',
  },
  {
    id: 4,
    title: 'Himalayan Adventure',
    image: 'https://img.freepik.com/free-photo/horizontal-shot-group-people-hiking-mountains-covered-snow-cloudy-sky_181624-44954.jpg?ga=GA1.1.1573898815.1728492290&semt=ais_hybrid',
    description: 'Trek through the mighty Himalayas',
    price: 'From ₹30,000',
  },
];

const popularTourPackages = [
  {
    id: 1,
    title: 'Golden Triangle Tour',
    image: 'https://media.istockphoto.com/id/940867852/photo/decorated-indian-elephant-in-front-of-amer-fort-palace-jaipur-intricately-carved-gateway-amber.jpg?s=612x612&w=0&k=20&c=Q74EPP-eWsPTWJ4zB6UXNCDqN510UfZsyQOhZBJNB1g=',
    duration: '6 Days',
    price: '₹45,000',
    description: 'Explore the rich heritage of Delhi, Agra, and Jaipur',
    highlights: ['Taj Mahal', 'Amber Fort', 'Qutub Minar', 'City Palace'],
    categories: ['Cultural', 'Heritage']
  },
  {
    id: 2,
    title: 'Kerala Backwaters Cruise',
    image: 'https://www.peakadventuretour.com/assets/imgs/kerala-tourism-04.webp',
    duration: '5 Days',
    price: '₹35,000',
    description: 'Experience the serene beauty of Kerala backwaters',
    highlights: ['Houseboat Stay', 'Ayurvedic Spa', 'Beach Visit', 'Cultural Shows'],
    categories: ['Solo', 'Adventure']
  },
  {
    id: 3,
    title: 'Himalayan Adventure Trek',
    image: 'https://img.freepik.com/free-photo/horizontal-shot-group-people-hiking-mountains-covered-snow-cloudy-sky_181624-44954.jpg?ga=GA1.1.1573898815.1728492290&semt=ais_hybrid',
    duration: '8 Days',
    price: '₹55,000',
    description: 'Trek through the majestic Himalayan mountains',
    highlights: ['Mountain Camping', 'River Rafting', 'Buddhist Monasteries', 'Local Cuisine'],
    categories: ['Trek', 'Adventure']
  },
  {
    id: 4,
    title: 'Ladakh Bike Expedition',
    image: 'https://scontent.fnag1-2.fna.fbcdn.net/v/t1.6435-9/33245597_183454369041075_2999713040514940928_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BclA4EqHHxYQ7kNvgFXpxOg&_nc_oc=AdipgwYFWW61Eu2xE2x2eWsgC0bfzn9TPaU-rmCIW_MM-OycBlV18guzO4RRmK0SMxiskDU42WRp3kf_fmX11Fr1&_nc_zt=23&_nc_ht=scontent.fnag1-2.fna&_nc_gid=A2_oEl9n0qM4T0zMFjPcH3h&oh=00_AYFgRRZGa-ZX-0VRh7jQapEwz7Lyc5BzJ3TCkWNy65BeGQ&oe=67F3A483',
    duration: '10 Days',
    price: '₹65,000',
    description: 'Experience the thrill of riding through the highest motorable roads',
    highlights: ['Khardung La Pass', 'Pangong Lake', 'Nubra Valley', 'Local Monasteries'],
    categories: ['Adventure', 'Solo']
  },
  {
    id: 5,
    title: 'Valley of Flowers Trek',
    image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/05/bread-1-1717069987.webp',
    duration: '7 Days',
    price: '₹40,000',
    description: 'Trek through the beautiful valley filled with alpine flowers',
    highlights: ['Alpine Meadows', 'Hemkund Sahib', 'Camping', 'Photography'],
    categories: ['Trek', 'Solo']
  },
  {
    id: 6,
    title: 'Spiti Valley Expedition',
    image: 'https://viacation.com/wp-content/uploads/2025/02/zgu7fgfjy5e275mfrwhw21sujkmz_shutterstock_2361426719.webp',
    duration: '9 Days',
    price: '₹50,000',
    description: 'Explore the remote landscapes of Spiti Valley',
    highlights: ['Key Monastery', 'Chandratal Lake', 'Local Villages', 'Stargazing'],
    categories: ['Trek', 'Adventure']
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'United States',
    rating: 5,
    comment: 'An incredible journey through India! The Golden Triangle tour was perfectly organized, and our guide was extremely knowledgeable.',
    avatar: '/images/avatar1.jpg',
  },
  {
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    comment: 'The Kerala backwaters cruise exceeded our expectations. The houseboat experience and local cuisine were outstanding.',
    avatar: '/images/avatar2.jpg',
  },
  {
    name: 'Emma Wilson',
    location: 'United Kingdom',
    rating: 5,
    comment: 'Our Himalayan trek was the adventure of a lifetime. The views were breathtaking and the team was very professional.',
    avatar: '/images/avatar3.jpg',
  },
];

const services = [
  {
    icon: <DirectionsBus sx={{ fontSize: 40 }} />,
    title: 'Transportation',
    description: 'Comfortable and reliable transportation throughout your journey',
  },
  {
    icon: <Hotel sx={{ fontSize: 40 }} />,
    title: 'Accommodation',
    description: 'Carefully selected hotels and unique stays for the best experience',
  },
  {
    icon: <Restaurant sx={{ fontSize: 40 }} />,
    title: 'Dining',
    description: 'Authentic local cuisine and fine dining experiences',
  },
  {
    icon: <LocalActivity sx={{ fontSize: 40 }} />,
    title: 'Activities',
    description: 'Exciting activities and cultural experiences at each destination',
  },
];

const photoGallery = [
  {
    img: 'https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=',
    title: 'Taj Mahal Sunrise',
  },
  {
    img: 'https://www.peakadventuretour.com/assets/imgs/kerala-tourism-04.webp',
    title: 'Kerala Houseboat',
  },
  {
    img: 'https://www.jaisalkot.com/wp-content/uploads/2018/03/AdobeStock_103261625-Latest.jpg',
    title: 'Rajasthan Palace',
  },
  {
    img: 'https://img.freepik.com/free-photo/horizontal-shot-group-people-hiking-mountains-covered-snow-cloudy-sky_181624-44954.jpg?ga=GA1.1.1573898815.1728492290&semt=ais_hybrid',
    title: 'Himalayan Mountains',
  },
  {
    img: 'https://assets.serenity.co.uk/47000-47999/47617/720x480.jpg',
    title: 'Goa Beaches',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0629/0997/2700/files/image003_b07aedb7-c3b7-40b5-b6f3-e94ae552ac9a_1024x1024.png?v=1679382649',
    title: 'Varanasi Ghats',
  },
];

const specialOffers = [
  {
    title: 'Early Bird Discount',
    description: 'Book 60 days in advance and get 15% off on any package',
    icon: <Celebration />,
    color: '#FF4081',
  },
  {
    title: 'Group Discount',
    description: 'Get 10% off for groups of 5 or more travelers',
    icon: <People />,
    color: '#7C4DFF',
  },
  {
    title: 'Photography Tours',
    description: 'Special photography-focused tours with professional guides',
    icon: <CameraAlt />,
    color: '#00BCD4',
  },
  {
    title: 'Luxury Upgrades',
    description: 'Complimentary luxury upgrades on selected packages',
    icon: <Flight />,
    color: '#FFA726',
  },
];

const stats = [
  {
    number: '10k+',
    label: 'Happy Travelers',
  },
  {
    number: '500+',
    label: 'Destinations',
  },
  {
    number: '150+',
    label: 'Expert Guides',
  },
  {
    number: '98%',
    label: 'Satisfaction Rate',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearchSelect = (event, value) => {
    if (value) {
      navigate(value.path);
    }
  };

  const handleDestinationClick = (destinationId) => {
    navigate(`/destinations?id=${destinationId}`);
  };

  const handlePackageClick = (packageId) => {
    navigate(`/tour-packages?id=${packageId}`);
  };

  const filteredPackages = selectedCategory === 'All'
    ? popularTourPackages
    : popularTourPackages.filter(pkg => pkg.categories.includes(selectedCategory));

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <Box>
      {/* Hero Section with Slider */}
      <Box sx={{ position: 'relative', height: '80vh' }}>
        <Slider {...sliderSettings}>
          {heroImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                height: '80vh',
                position: 'relative',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </Slider>

        {/* Hero Content Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: '',
            justifyContent: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h1"
              color="white"
              align="center"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Discover Incredible India
            </Typography>
            <Typography
              variant="h5"
              color="white"
              align="center"
              sx={{ mb: 4 }}
            >
              Experience the magic of diverse cultures, landscapes, and traditions
            </Typography>

            {/* Search Bar */}
            <Paper
              sx={{
                p: 2,
                maxWidth: 600,
                mx: 'auto',
                borderRadius: 2,
              }}
            >
              <Autocomplete
                value={searchValue}
                onChange={handleSearchSelect}
                options={searchSuggestions}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search destinations, tours, or experiences..."
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <Search color="action" sx={{ mr: 1 }} />
                      ),
                    }}
                  />
                )}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    <Typography>
                      {option.title}
                      <Typography
                        component="span"
                        color="text.secondary"
                        sx={{ ml: 1, fontSize: '0.875rem' }}
                      >
                        ({option.type})
                      </Typography>
                    </Typography>
                  </Box>
                )}
              />
            </Paper>
          </Container>
        </Box>
      </Box>

      {/* Featured Destinations */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Featured Destinations
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Explore our hand-picked destinations across India
        </Typography>

        <Grid container spacing={4}>
          {featuredDestinations.map((destination, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                    cursor: 'pointer',
                  },
                }}
                onClick={() => handleDestinationClick(destination.id)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {destination.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {destination.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  >
                    {destination.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Popular Tour Packages */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Popular Tour Packages
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Discover our most loved travel experiences
        </Typography>

        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6 }}>
          {['All', 'Trek', 'Solo', 'Adventure'].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'contained' : 'outlined'}
              onClick={() => setSelectedCategory(category)}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        <Grid container spacing={4}>
          {filteredPackages.map((pkg, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                    cursor: 'pointer',
                  },
                }}
                onClick={() => handlePackageClick(pkg.id)}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={pkg.image}
                  alt={pkg.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {pkg.title}
                  </Typography>
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="text.secondary">
                      {pkg.duration}
                    </Typography>
                    <Typography color="primary" fontWeight="bold">
                      {pkg.price}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {pkg.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Highlights:
                    </Typography>
                    <Grid container spacing={1}>
                      {pkg.highlights.map((highlight, idx) => (
                        <Grid item key={idx} xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            • {highlight}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {pkg.categories.map((category, idx) => (
                      <Chip
                        key={idx}
                        label={category}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Experience the TravelSapiens difference
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                icon: <LocationOn sx={{ fontSize: 40 }} />,
                title: 'Handpicked Destinations',
                description:
                  'Carefully selected locations that offer unique and authentic experiences',
              },
              {
                icon: <AccessTime sx={{ fontSize: 40 }} />,
                title: '24/7 Support',
                description:
                  'Round-the-clock assistance for all your travel needs',
              },
              {
                icon: <Group sx={{ fontSize: 40 }} />,
                title: 'Expert Guides',
                description:
                  'Professional local guides who know India inside out',
              },
            ].map((feature, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                  }}
                >
                  <IconButton
                    color="primary"
                    sx={{
                      mb: 2,
                      '&:hover': { backgroundColor: 'transparent' },
                    }}
                    disableRipple
                  >
                    {feature.icon}
                  </IconButton>
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      

      {/* Our Services */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Our Services
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Everything you need for a perfect journey
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <IconButton
                    color="primary"
                    sx={{
                      mb: 2,
                      '&:hover': { backgroundColor: 'transparent' },
                    }}
                    disableRipple
                  >
                    {service.icon}
                  </IconButton>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          What Our Travelers Say
        </Typography>
        <Typography
          variant="h5"
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
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Avatar
                    src={testimonial.avatar}
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
                <FormatQuote color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="body1" paragraph>
                  {testimonial.comment}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Photo Gallery */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Capture the Magic
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Glimpses of incredible experiences awaiting you
          </Typography>
          <ImageList
            sx={{
              width: '100%',
              height: 450,
              transform: 'translateZ(0)',
            }}
            rowHeight={300}
            gap={8}
            cols={3}
          >
            {photoGallery.map((item) => (
              <ImageListItem
                key={item.img}
                sx={{
                  overflow: 'hidden',
                  '&:hover img': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: 8,
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>

      {/* Special Offers */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Special Offers
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Exclusive deals and packages for your next adventure
        </Typography>
        <Grid container spacing={4}>
          {specialOffers.map((offer, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: offer.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: 3,
                  }}
                >
                  {offer.icon}
                </Box>
                <CardContent sx={{ pt: 5, textAlign: 'center' }}>
                  <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                    {offer.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {offer.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Travel Statistics */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mt: 8,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/stats-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item key={index} xs={6} md={3}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 