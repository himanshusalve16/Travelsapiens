import { createTheme } from '@mui/material/styles';

// Define color constants
const primaryColor = '#FF6B00'; // bright orange
const primaryLight = '#FF8533';
const primaryDark = '#CC5500';

// Create theme settings for both light and dark modes
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: primaryColor,
      light: primaryLight,
      dark: primaryDark,
    },
    ...(mode === 'light'
      ? {
          // Light mode colors
          secondary: {
            main: '#FFFFFF',
            light: '#FFFFFF',
            dark: '#F5F5F5',
          },
          background: {
            default: '#FFFFFF',
            paper: '#F5F5F5',
          },
          text: {
            primary: '#333333',
            secondary: '#666666',
          },
        }
      : {
          // Dark mode colors
          secondary: {
            main: '#272727',
            light: '#333333',
            dark: '#1A1A1A',
          },
          background: {
            default: '#121212',
            paper: '#272727',
          },
          text: {
            primary: '#F5F5F5',
            secondary: '#BBBBBB',
          },
        }),
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
          '@media (max-width:600px)': {
            padding: '6px 16px',
            fontSize: '0.875rem',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(255, 107, 0, 0.25)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            padding: '0 16px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

// Create the light theme (default)
const lightTheme = createTheme(getDesignTokens('light'));
const darkTheme = createTheme(getDesignTokens('dark'));

export { lightTheme, darkTheme }; 