# TravelSapiens

A responsive travel website with modern UI design, built with React and Material-UI.

## Features

- Responsive travel website optimized for all screen sizes
- Destinations and tour packages showcases
- Dark/light theme toggle for user preference
- WhatsApp integration for direct booking inquiries
- Contact information in the About page
- Fully client-side application with no backend dependencies

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)

### Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/himanshusalve16/Travelsapiens.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Travelsapiens
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Key Components

```
Travelsapiens/
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Destinations.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Login.jsx
│   │   ├── styles/
│   │   │   └── theme.js
│   │   ├── utils/
│   │   ├── services/
│   │   └── App.jsx
│   │   └── components/
│   │   └── layout/
│   │   └── Navbar.jsx
│   │   └── Footer.jsx
│   └── package.json
```

### Features
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop screens
- **Theme Toggle**: Switch between light and dark themes
- **WhatsApp Integration**: Direct message capability for tour bookings
- **Image Gallery**: Showcase of beautiful travel destinations
- **Material UI**: Modern and clean user interface components

## Customization

### Adding New Destinations

Add new destinations by updating the `destinationsData` array in `src/pages/Destinations.jsx`.

### Modifying Tour Packages

Edit the tour packages by updating the `packagesData` array in `src/pages/TourPackages.jsx`.

### Contact Information

Update the contact details in `src/pages/About.tsx` to reflect your business information.

## Deployment

The website can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any other static site hosting service

### Deployment to Vercel

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Deploy:
   ```
   vercel
   ```

## License

MIT

## Contact

Your Name - himanshusalve16@gmail.com
Project Link:travelsapiens.vercel.app

## Acknowledgments

- [Material-UI](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [Create React App](https://create-react-app.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

