import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
  Autocomplete,
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SearchIcon from '@mui/icons-material/Search';

const pages = [
  { title: 'Destinations', path: '/destinations' },
  { title: 'Tour Packages', path: '/tour-packages' },
  { title: 'Why Choose Us', path: '/why-choose-us' },
  { title: 'Blogs', path: '/blog' },
  { title: 'About Us', path: '/about' },
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

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearchSelect = (event, value) => {
    if (value) {
      navigate(value.path);
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <FlightTakeoffIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'primary.main' }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            TravelSapiens
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <FlightTakeoffIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'primary.main' }} />
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            TravelSapiens
          </Typography>

          {/* Search Bar */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mx: 2 }}>
            <Autocomplete
              options={searchSuggestions}
              getOptionLabel={(option) => option.title}
              onChange={handleSearchSelect}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search destinations & packages"
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <SearchIcon color="action" sx={{ mr: 1 }} />
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
          </Box>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'text.primary', display: 'block', mx: 2 }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 