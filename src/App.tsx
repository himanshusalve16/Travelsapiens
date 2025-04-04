import React, { useState, useMemo, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './styles/theme';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import TourPackages from './pages/TourPackages';
import WhyChooseUs from './pages/WhyChooseUs';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Create a theme context
export const ColorModeContext = createContext({ 
  toggleColorMode: () => {},
  mode: 'light'
});

const App: React.FC = () => {
  // Get saved theme preference from local storage or default to 'light'
  const [mode, setMode] = useState(localStorage.getItem('themeMode') || 'light');

  // Save theme preference to local storage when it changes
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // Color context with toggle function
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode],
  );

  // Use the appropriate theme based on the current mode
  const theme = useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/tour-packages" element={<TourPackages />} />
                <Route path="/why-choose-us" element={<WhyChooseUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
