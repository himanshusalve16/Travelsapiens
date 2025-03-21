import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Button,
  Chip,
  SelectChangeEvent,
} from '@mui/material';
import PackageDetails from '../components/PackageDetails';
import { WhatsApp } from '@mui/icons-material';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  type: string;
  season: string;
  duration: string;
  location: string;
  highlights: string[];
  itinerary: { day: string; activities: string[] }[];
  inclusions: string[];
  exclusions: string[];
  accommodation: string;
  transportation: string;
  meals: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Taj Mahal, Agra',
    image: 'https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=',
    description: 'Experience the magnificent symbol of eternal love and explore the rich Mughal heritage of Agra.',
    price: 15000,
    type: 'Cultural',
    season: 'Winter',
    duration: '2 Days',
    location: 'Agra, Uttar Pradesh',
    highlights: [
      'Sunrise view of Taj Mahal',
      'Guided tour of Agra Fort',
      'Visit to Mehtab Bagh',
      'Local craft workshops',
      'Traditional Mughlai cuisine experience'
    ],
    itinerary: [
      {
        day: 'Day 1: Arrival and Taj Mahal',
        activities: [
          'Morning arrival in Agra',
          'Hotel check-in and freshen up',
          'Afternoon visit to Taj Mahal',
          'Evening Mughlai dinner'
        ]
      },
      {
        day: 'Day 2: Agra Exploration',
        activities: [
          'Sunrise view of Taj Mahal',
          'Agra Fort tour',
          'Local market visit',
          'Departure'
        ]
      }
    ],
    inclusions: [
      '1 night accommodation',
      'Breakfast and dinner',
      'Local transportation',
      'Professional guide',
      'Monument entrance fees'
    ],
    exclusions: [
      'Airfare/train tickets',
      'Personal expenses',
      'Camera fees',
      'Tips',
      'Travel insurance'
    ],
    accommodation: '4-star hotel with modern amenities',
    transportation: 'Air-conditioned vehicle',
    meals: 'Breakfast and dinner included'
  },
  {
    id: 2,
    name: 'Kerala Backwaters',
    image: 'https://www.peakadventuretour.com/assets/imgs/kerala-tourism-04.webp',
    description: 'Cruise through serene backwaters in a houseboat and experience the tranquil beauty of Kerala.',
    price: 20000,
    type: 'Nature',
    season: 'Monsoon',
    duration: '3 Days',
    location: 'Alleppey, Kerala',
    highlights: [
      'Houseboat cruise',
      'Village life experience',
      'Traditional Kerala cuisine',
      'Ayurvedic massage',
      'Sunset boat ride'
    ],
    itinerary: [
      {
        day: 'Day 1: Arrival',
        activities: [
          'Arrive in Alleppey',
          'Houseboat check-in',
          'Backwater cruise',
          'Traditional Kerala dinner'
        ]
      },
      {
        day: 'Day 2: Backwater Experience',
        activities: [
          'Morning yoga',
          'Village visit',
          'Cooking demonstration',
          'Cultural performance'
        ]
      },
      {
        day: 'Day 3: Departure',
        activities: [
          'Sunrise boat ride',
          'Ayurvedic massage',
          'Local market visit',
          'Departure'
        ]
      }
    ],
    inclusions: [
      'Houseboat stay',
      'All meals',
      'Village tours',
      'Cultural activities',
      'Ayurvedic treatment'
    ],
    exclusions: [
      'Travel to/from Alleppey',
      'Personal expenses',
      'Additional activities',
      'Tips',
      'Travel insurance'
    ],
    accommodation: 'Premium houseboat',
    transportation: 'Houseboat and local transfers',
    meals: 'All meals included'
  },
  {
    id: 3,
    name: 'Rajasthan Heritage',
    image: 'https://www.jaisalkot.com/wp-content/uploads/2018/03/AdobeStock_103261625-Latest.jpg',
    description: 'Explore royal palaces and majestic forts while experiencing the rich cultural heritage of Rajasthan.',
    price: 25000,
    type: 'Cultural',
    season: 'Winter',
    duration: '4 Days',
    location: 'Jaipur - Udaipur',
    highlights: [
      'Amber Fort visit',
      'City Palace tour',
      'Desert safari',
      'Traditional dance show',
      'Heritage hotel stay'
    ],
    itinerary: [
      {
        day: 'Day 1: Jaipur Arrival',
        activities: [
          'Arrive in Jaipur',
          'City orientation tour',
          'Welcome dinner',
          'Cultural performance'
        ]
      },
      {
        day: 'Day 2: Jaipur Exploration',
        activities: [
          'Amber Fort visit',
          'City Palace tour',
          'Local bazaar visit',
          'Traditional dinner'
        ]
      },
      {
        day: 'Day 3: Udaipur',
        activities: [
          'Drive to Udaipur',
          'Lake Pichola cruise',
          'City Palace visit',
          'Cultural show'
        ]
      },
      {
        day: 'Day 4: Departure',
        activities: [
          'Morning heritage walk',
          'Craft village visit',
          'Souvenir shopping',
          'Departure'
        ]
      }
    ],
    inclusions: [
      '3 nights accommodation',
      'Daily breakfast',
      'Transportation',
      'Guide services',
      'Monument entries'
    ],
    exclusions: [
      'Flights',
      'Personal expenses',
      'Optional activities',
      'Tips',
      'Travel insurance'
    ],
    accommodation: 'Heritage hotels',
    transportation: 'Private AC vehicle',
    meals: 'Breakfast included'
  },
  {
    id: 4,
    name: 'Himalayan Adventure',
    image: 'https://img.freepik.com/free-photo/horizontal-shot-group-people-hiking-mountains-covered-snow-cloudy-sky_181624-44954.jpg?ga=GA1.1.1573898815.1728492290&semt=ais_hybrid',
    description: 'Trek through the mighty Himalayas and experience the thrill of mountain adventure.',
    price: 30000,
    type: 'Adventure',
    season: 'Summer',
    duration: '5 Days',
    location: 'Manali - Solang Valley',
    highlights: [
      'Mountain trekking',
      'Camping experience',
      'River rafting',
      'Local culture',
      'Adventure sports'
    ],
    itinerary: [
      {
        day: 'Day 1: Manali Arrival',
        activities: [
          'Arrive in Manali',
          'Acclimatization walk',
          'Equipment check',
          'Trek briefing'
        ]
      },
      {
        day: 'Day 2-3: Trek',
        activities: [
          'Start trek',
          'Camping',
          'Photography sessions',
          'Bonfire dinner'
        ]
      },
      {
        day: 'Day 4: Adventure Activities',
        activities: [
          'River rafting',
          'Zip lining',
          'Rock climbing',
          'Camp activities'
        ]
      },
      {
        day: 'Day 5: Return',
        activities: [
          'Morning yoga',
          'Local monastery visit',
          'Souvenir shopping',
          'Departure'
        ]
      }
    ],
    inclusions: [
      'Camping equipment',
      'All meals during trek',
      'Adventure activities',
      'Safety gear',
      'Expert guides'
    ],
    exclusions: [
      'Travel to Manali',
      'Personal gear',
      'Extra activities',
      'Tips',
      'Insurance'
    ],
    accommodation: 'Camping and guesthouse',
    transportation: 'Trek support and transfers',
    meals: 'All meals during trek'
  }
];

const Destinations: React.FC = () => {
  const [filters, setFilters] = useState({
    type: '',
    season: '',
    priceRange: [0, 50000],
  });

  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleFilterChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: newValue as number[],
    }));
  };

  const filteredDestinations = destinations.filter((destination) => {
    return (
      (filters.type === '' || destination.type === filters.type) &&
      (filters.season === '' || destination.season === filters.season) &&
      destination.price >= filters.priceRange[0] &&
      destination.price <= filters.priceRange[1]
    );
  });

  const handleBookViaWhatsApp = (destination: Destination) => {
    const phoneNumber = '919876543210'; // Replace with your WhatsApp number
    const message = `Hello! I'm interested in booking the *${destination.name}* destination package:\n\n` +
      ` Location: ${destination.location}\n` +
      ` Duration: ${destination.duration}\n` +
      ` Price: ₹${destination.price}\n` +
      ` Type: ${destination.type}\n\n` +
      'Please provide booking details.';
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Explore Destinations
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Find your perfect Indian getaway
        </Typography>

        {/* Filters */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  name="type"
                  value={filters.type}
                  label="Type"
                  onChange={handleFilterChange}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Cultural">Cultural</MenuItem>
                  <MenuItem value="Nature">Nature</MenuItem>
                  <MenuItem value="Adventure">Adventure</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Season</InputLabel>
                <Select
                  name="season"
                  value={filters.season}
                  label="Season"
                  onChange={handleFilterChange}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Summer">Summer</MenuItem>
                  <MenuItem value="Monsoon">Monsoon</MenuItem>
                  <MenuItem value="Winter">Winter</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom>Price Range (₹)</Typography>
              <Slider
                value={filters.priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={50000}
                step={1000}
                valueLabelFormat={(value) => `₹${value}`}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Destinations Grid */}
        <Grid container spacing={4}>
          {filteredDestinations.map((destination) => (
            <Grid item key={destination.id} xs={12} sm={6} md={4}>
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
                  height="200"
                  image={destination.image}
                  alt={destination.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {destination.name}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={destination.type}
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Chip
                      label={destination.season}
                      color="secondary"
                      size="small"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {destination.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    From ₹{destination.price}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      sx={{ flex: 1 }}
                      onClick={() => setSelectedDestination(destination)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ flex: 1 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookViaWhatsApp(destination);
                      }}
                      startIcon={<WhatsApp />}
                    >
                      Book Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {selectedDestination && (
          <PackageDetails
            open={!!selectedDestination}
            onClose={() => setSelectedDestination(null)}
            package={{
              title: selectedDestination.name,
              image: selectedDestination.image,
              description: selectedDestination.description,
              duration: selectedDestination.duration,
              price: `₹${selectedDestination.price}`,
              type: selectedDestination.type,
              location: selectedDestination.location,
              highlights: selectedDestination.highlights,
              itinerary: selectedDestination.itinerary,
              inclusions: selectedDestination.inclusions,
              exclusions: selectedDestination.exclusions,
              accommodation: selectedDestination.accommodation,
              transportation: selectedDestination.transportation,
              meals: selectedDestination.meals,
            }}
          />
        )}
      </Container>
    </Box>
  );
};

export default Destinations; 