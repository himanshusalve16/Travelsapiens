import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Schedule,
  AttachMoney,
  LocationOn,
  Hotel,
  Restaurant,
  DirectionsBus,
  CheckCircle,
  Cancel,
} from '@mui/icons-material';

interface PackageDetailsProps {
  open: boolean;
  onClose: () => void;
  package: {
    title: string;
    image: string;
    description: string;
    duration: string;
    price: string;
    type: string;
    location?: string;
    highlights?: string[];
    itinerary?: { day: string; activities: string[] }[];
    inclusions?: string[];
    exclusions?: string[];
    accommodation?: string;
    transportation?: string;
    meals?: string;
  };
}

const PackageDetails: React.FC<PackageDetailsProps> = ({
  open,
  onClose,
  package: pkg,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
    >
      <DialogTitle>
        <Typography variant="h4">{pkg.title}</Typography>
        <Box sx={{ mt: 1 }}>
          <Chip
            icon={<Schedule />}
            label={pkg.duration}
            sx={{ mr: 1 }}
            color="primary"
            size="small"
          />
          <Chip
            icon={<AttachMoney />}
            label={pkg.price}
            color="primary"
            size="small"
          />
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          {/* Main Image */}
          <Grid item xs={12}>
            <Box
              component="img"
              src={pkg.image}
              alt={pkg.title}
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 1,
              }}
            />
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <Typography variant="body1" paragraph>
              {pkg.description}
            </Typography>
          </Grid>

          {/* Location Info */}
          {pkg.location && (
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Location</Typography>
              </Box>
              <Typography variant="body1">{pkg.location}</Typography>
            </Grid>
          )}

          {/* Highlights */}
          {pkg.highlights && (
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Highlights
              </Typography>
              <List>
                {pkg.highlights.map((highlight, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={highlight} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          )}

          {/* Itinerary */}
          {pkg.itinerary && (
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Itinerary
              </Typography>
              {pkg.itinerary.map((day, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {day.day}
                  </Typography>
                  <List dense>
                    {day.activities.map((activity, actIndex) => (
                      <ListItem key={actIndex}>
                        <ListItemIcon>
                          <CheckCircle fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={activity} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Grid>
          )}

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          {/* Accommodation, Transportation, Meals */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Hotel color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Accommodation
              </Typography>
              <Typography variant="body2">{pkg.accommodation}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <DirectionsBus color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Transportation
              </Typography>
              <Typography variant="body2">{pkg.transportation}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Restaurant color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Meals
              </Typography>
              <Typography variant="body2">{pkg.meals}</Typography>
            </Box>
          </Grid>

          {/* Inclusions & Exclusions */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Inclusions
            </Typography>
            <List dense>
              {pkg.inclusions?.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircle fontSize="small" color="success" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Exclusions
            </Typography>
            <List dense>
              {pkg.exclusions?.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Cancel fontSize="small" color="error" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button variant="contained" color="primary">
          Book Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PackageDetails; 