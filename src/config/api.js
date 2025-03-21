// API configuration
const API_CONFIG = {
  // Development API URL
  DEV_API_URL: 'http://localhost:5000/api',
  
  // Production API URL (update this when deploying)
  PROD_API_URL: 'https://api.travelsapiens.com/api',
  
  // Set to true for production, false for development
  IS_PRODUCTION: false
};

// Export the base API URL based on environment
export const API_URL = API_CONFIG.IS_PRODUCTION 
  ? API_CONFIG.PROD_API_URL 
  : API_CONFIG.DEV_API_URL;

// Helper function to get auth header
export const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
};

export default API_CONFIG; 