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
import HomeIcon from '@mui/icons-material/Home';

const pages = [
  { title: 'Home', path: '/', icon: <HomeIcon /> },
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
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
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
      handleCloseNavMenu();
    }
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: { xs: '64px', sm: '72px' },
            gap: { xs: 1, sm: 2 },
            py: { xs: 1, sm: 1.5 }
          }}
        >
          {/* Menu Icon - Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo and Brand - Both Mobile and Desktop */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            minWidth: { xs: 'auto', md: '200px' }
          }}>
            <FlightTakeoffIcon sx={{ 
              color: 'primary.main',
              fontSize: { xs: '1.5rem', sm: '2rem' },
              mr: 1
            }} />
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                letterSpacing: '0.5px'
              }}
            >
              TravelSapiens
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box sx={{ 
            flex: { xs: 1, md: 0.7 },
            display: 'flex', 
            justifyContent: 'center',
            px: { xs: 1, sm: 2, md: 4 }
          }}>
            <Autocomplete
              options={searchSuggestions}
              getOptionLabel={(option) => option.title}
              onChange={handleSearchSelect}
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '400px' },
                '& .MuiInputBase-root': {
                  height: { xs: '40px', sm: '44px' },
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={isSmall ? "Search" : "Search destinations & packages"}
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

          {/* Desktop Navigation */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            gap: { md: 1, lg: 2 },
            justifyContent: 'flex-end',
            flex: 1
          }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ 
                  color: 'text.primary',
                  fontSize: { md: '0.9rem', lg: '1rem' },
                  px: { md: 1.5, lg: 2 },
                  minWidth: 0,
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    color: 'primary.main'
                  }
                }}
                startIcon={page.icon}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
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
              '& .MuiPaper-root': {
                width: '100%',
                maxWidth: '300px',
                mt: 1
              }
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.title}
                onClick={handleCloseNavMenu}
                component={RouterLink}
                to={page.path}
                sx={{
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    color: 'primary.main'
                  }
                }}
              >
                {page.icon && (
                  <Box sx={{ mr: 2, display: 'flex', color: 'primary.main' }}>
                    {page.icon}
                  </Box>
                )}
                <Typography>{page.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 