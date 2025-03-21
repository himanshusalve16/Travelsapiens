import React, { useState } from 'react';
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
} from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import PackageDetails from '../components/PackageDetails';

interface TourPackage {
  id: number;
  title: string;
  image: string;
  description: string;
  duration: string;
  price: string;
  type: string;
  location: string;
  highlights: string[];
  itinerary: { day: string; activities: string[] }[];
  inclusions: string[];
  exclusions: string[];
  accommodation: string;
  transportation: string;
  meals: string;
  categories: string[];
}

const packages: TourPackage[] = [
  {
    id: 1,
    title: 'Golden Triangle Tour',
    image: 'https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FPlacesOfInterest%2FAmer-Fort-40.jpg&w=1080&q=90',
    description: 'Explore Delhi, Agra, and Jaipur in this classic Indian journey. Experience the perfect blend of history, culture, and architecture.',
    duration: '6 Days',
    price: '₹45,000',
    type: 'Cultural',
    location: 'Delhi - Agra - Jaipur',
    highlights: [
      'Visit the iconic Taj Mahal at sunrise',
      'Explore Amber Fort in Jaipur',
      'Experience Old Delhi food walk',
      'Shop at local bazaars',
      'Visit UNESCO World Heritage sites',
    ],
    itinerary: [
      {
        day: 'Day 1: Delhi Arrival',
        activities: [
          'Airport pickup and transfer to hotel',
          'Welcome dinner at local restaurant',
          'Overnight stay in Delhi',
        ],
      },
      {
        day: 'Day 2: Delhi Sightseeing',
        activities: [
          'Visit Qutub Minar',
          'Explore Humayun\'s Tomb',
          'India Gate visit',
          'Old Delhi food walk',
        ],
      },
      {
        day: 'Day 3: Delhi to Agra',
        activities: [
          'Morning drive to Agra',
          'Taj Mahal sunset visit',
          'Evening Mohabbat the Taj show',
        ],
      },
      {
        day: 'Day 4: Agra to Jaipur',
        activities: [
          'Taj Mahal sunrise visit',
          'Agra Fort exploration',
          'Drive to Jaipur via Fatehpur Sikri',
        ],
      },
      {
        day: 'Day 5: Jaipur Sightseeing',
        activities: [
          'Amber Fort morning visit',
          'City Palace tour',
          'Hawa Mahal photo stop',
          'Local market visit',
        ],
      },
      {
        day: 'Day 6: Departure',
        activities: [
          'Morning at leisure',
          'Optional shopping tour',
          'Transfer to airport/railway station',
        ],
      },
    ],
    inclusions: [
      '5 nights accommodation in 4-star hotels',
      'Daily breakfast and dinner',
      'Air-conditioned private vehicle',
      'Professional English-speaking guide',
      'All entrance fees',
      'Airport transfers',
      'Taxes and service charges',
    ],
    exclusions: [
      'Airfare',
      'Lunch',
      'Personal expenses',
      'Camera fees',
      'Tips and gratuities',
      'Travel insurance',
    ],
    accommodation: '4-star hotels with modern amenities',
    transportation: 'Private air-conditioned vehicle',
    meals: 'Daily breakfast and dinner included',
    categories: ['Cultural', 'Heritage'],
  },
  {
    id: 2,
    title: 'Kerala Backwaters Cruise',
    image: 'https://www.peakadventuretour.com/assets/imgs/kerala-tourism-04.webp',
    description: 'Experience the serene backwaters of Kerala in luxury. Cruise through the tranquil waters while enjoying traditional Kerala hospitality.',
    duration: '5 Days',
    price: '₹35,000',
    type: 'Relaxation',
    location: 'Kochi - Alleppey - Kumarakom',
    highlights: [
      'Overnight houseboat stay',
      'Traditional Kerala cuisine',
      'Village life experience',
      'Ayurvedic spa treatments',
      'Cultural performances',
    ],
    itinerary: [
      {
        day: 'Day 1: Kochi Arrival',
        activities: [
          'Airport pickup',
          'Fort Kochi sightseeing',
          'Evening Kathakali performance',
        ],
      },
      {
        day: 'Day 2: Kochi to Alleppey',
        activities: [
          'Drive to Alleppey',
          'Houseboat check-in',
          'Backwater cruise',
          'Sunset viewing',
        ],
      },
      {
        day: 'Day 3: Alleppey to Kumarakom',
        activities: [
          'Morning cruise',
          'Bird sanctuary visit',
          'Village walk',
          'Ayurvedic massage',
        ],
      },
      {
        day: 'Day 4: Kumarakom',
        activities: [
          'Yoga session',
          'Cooking demonstration',
          'Canoe ride',
          'Cultural show',
        ],
      },
      {
        day: 'Day 5: Departure',
        activities: [
          'Morning at leisure',
          'Souvenir shopping',
          'Transfer to airport',
        ],
      },
    ],
    inclusions: [
      '4 nights accommodation',
      'All meals on houseboat',
      'Transportation',
      'Sightseeing tours',
      'Cultural shows',
      'English-speaking guide',
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Additional activities',
      'Tips',
      'Travel insurance',
    ],
    accommodation: 'Luxury houseboat and resort stays',
    transportation: 'AC vehicle and houseboat',
    meals: 'All meals included',
    categories: ['Solo', 'Relaxation'],
  },
  {
    id: 3,
    title: 'Himalayan Adventure',
    image: 'https://img.freepik.com/free-photo/horizontal-shot-group-people-hiking-mountains-covered-snow-cloudy-sky_181624-44954.jpg?ga=GA1.1.1573898815.1728492290&semt=ais_hybrid',
    description: 'Trek through the majestic Himalayas. Experience breathtaking views, local culture, and adventure of a lifetime.',
    duration: '8 Days',
    price: '₹55,000',
    type: 'Adventure',
    location: 'Manali - Rohtang Pass - Spiti Valley',
    highlights: [
      'High-altitude trek',
      'Buddhist monastery visits',
      'Camping under stars',
      'Local homestay experience',
      'Mountain photography',
    ],
    itinerary: [
      {
        day: 'Day 1: Manali Arrival',
        activities: [
          'Arrival and acclimatization',
          'Equipment check',
          'Trek briefing',
          'Local market visit',
        ],
      },
      {
        day: 'Day 2-3: Trek Begin',
        activities: [
          'Start trek to base camp',
          'Wilderness camping',
          'Photography sessions',
          'Star gazing',
        ],
      },
      {
        day: 'Day 4-5: High Altitude Trek',
        activities: [
          'Summit attempt',
          'Mountain views',
          'Packed lunch',
          'Camp setup',
        ],
      },
      {
        day: 'Day 6-7: Descent',
        activities: [
          'Return trek',
          'Village visits',
          'Monastery tour',
          'Celebration dinner',
        ],
      },
      {
        day: 'Day 8: Departure',
        activities: [
          'Morning yoga',
          'Certificate distribution',
          'Return transfer',
        ],
      },
    ],
    inclusions: [
      'All camping equipment',
      'Professional trek guide',
      'Meals during trek',
      'Safety equipment',
      'First aid support',
      'Permits and fees',
    ],
    exclusions: [
      'Personal gear',
      'Travel insurance',
      'Emergency evacuation',
      'Personal expenses',
      'Tips for staff',
    ],
    accommodation: 'Camping and basic guesthouses',
    transportation: 'SUV transfers and trek support',
    meals: 'All meals during trek',
    categories: ['Trek', 'Adventure'],
  },
  {
    id: 4,
    title: 'Ladakh Bike Expedition',
    image: 'https://scontent.fnag1-2.fna.fbcdn.net/v/t1.6435-9/33245597_183454369041075_2999713040514940928_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BclA4EqHHxYQ7kNvgFXpxOg&_nc_oc=AdipgwYFWW61Eu2xE2x2eWsgC0bfzn9TPaU-rmCIW_MM-OycBlV18guzO4RRmK0SMxiskDU42WRp3kf_fmX11Fr1&_nc_zt=23&_nc_ht=scontent.fnag1-2.fna&_nc_gid=A2_oEl9n0qM4T0zMFjPcH3h&oh=00_AYFgRRZGa-ZX-0VRh7jQapEwz7Lyc5BzJ3TCkWNy65BeGQ&oe=67F3A483',
    description: 'Experience the thrill of riding through the highest motorable roads in the world.',
    duration: '10 Days',
    price: '₹65,000',
    type: 'Adventure',
    location: 'Leh - Khardung La - Pangong Lake - Nubra Valley',
    highlights: [
      'Ride to Khardung La Pass',
      'Camp at Pangong Lake',
      'Visit ancient monasteries',
      'Experience local culture',
      'Photography opportunities',
    ],
    itinerary: [
      {
        day: 'Day 1-2: Acclimatization',
        activities: ['Arrival in Leh', 'Rest and acclimatization', 'Local sightseeing'],
      },
      // Add more itinerary days as needed
    ],
    inclusions: ['Bike rental', 'Accommodation', 'Fuel', 'Support vehicle', 'Guide'],
    exclusions: ['Flights', 'Personal expenses', 'Travel insurance'],
    accommodation: 'Hotels and camping',
    transportation: 'Royal Enfield motorcycle',
    meals: 'All meals included',
    categories: ['Adventure', 'Solo'],
  },
  {
    id: 5,
    title: 'Valley of Flowers Trek',
    image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/05/bread-1-1717069987.webp',
    description: 'Trek through the beautiful UNESCO World Heritage Site known for its meadows of endemic alpine flowers.',
    duration: '7 Days',
    price: '₹40,000',
    type: 'Trek',
    location: 'Govindghat - Ghangaria - Valley of Flowers',
    highlights: [
      'UNESCO World Heritage Site',
      'Diverse flora and fauna',
      'Hemkund Sahib visit',
      'Local village experience',
    ],
    itinerary: [
      {
        day: 'Day 1: Arrival',
        activities: ['Reach Govindghat', 'Trek preparation', 'Briefing session'],
      },
      // Add more itinerary days as needed
    ],
    inclusions: ['Accommodation', 'Meals', 'Guide', 'Permits'],
    exclusions: ['Travel to Govindghat', 'Personal expenses'],
    accommodation: 'Guesthouses and camping',
    transportation: 'Local transport',
    meals: 'All meals during trek',
    categories: ['Trek', 'Solo'],
  }
];

const TourPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleOpenDetails = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
  };

  const handleCloseDetails = () => {
    setSelectedPackage(null);
  };

  const handleBookViaWhatsApp = (pkg: TourPackage) => {
    const phoneNumber = '919876543210'; // Replace with your WhatsApp number
    const message = `Hello! I'm interested in booking the *${pkg.title}* tour package:\n\n` +
      `📍 Location: ${pkg.location}\n` +
      `⏱️ Duration: ${pkg.duration}\n` +
      `💰 Price: ${pkg.price}\n` +
      `🏷️ Type: ${pkg.type}\n\n` +
      'Please provide booking details.';
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredPackages = selectedCategory === 'All'
    ? packages
    : packages.filter(pkg => pkg.categories.includes(selectedCategory));

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Tour Packages
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Discover our curated collection of travel experiences
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
        {filteredPackages.map((pkg) => (
          <Grid item key={pkg.id} xs={12} md={4}>
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
                    {pkg.highlights.slice(0, 4).map((highlight, idx) => (
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
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
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
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      sx={{ flex: 1 }}
                      onClick={() => handleOpenDetails(pkg)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ flex: 1 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookViaWhatsApp(pkg);
                      }}
                      startIcon={<WhatsApp />}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedPackage && (
        <PackageDetails
          open={!!selectedPackage}
          package={selectedPackage}
          onClose={handleCloseDetails}
        />
      )}
    </Container>
  );
};

export default TourPackages; 