// Theme configuration for Premier Suite Real Estate
export const theme = {
  brand: {
    name: 'Premier Suite',
    tagline: 'Luxury Real Estate Excellence',
    description: 'Find your dream luxury property with Premier Suite. Premium real estate listings, expert service, and personalized assistance.',
  },
  colors: {
    primary: 'hsl(0, 84%, 60%)', // Premium Red
    primaryLight: 'hsl(0, 84%, 70%)',
    primaryDark: 'hsl(0, 84%, 50%)',
    secondary: 'hsl(45, 93%, 47%)', // Luxury Gold
    secondaryLight: 'hsl(45, 93%, 57%)',
    accent: 'hsl(210, 40%, 96%)',
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(20, 14.3%, 4.1%)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, hsl(0, 84%, 60%), hsl(0, 84%, 70%))',
    secondary: 'linear-gradient(135deg, hsl(45, 93%, 47%), hsl(45, 93%, 57%))',
    luxury: 'linear-gradient(135deg, hsl(0, 84%, 60%) 0%, hsl(45, 93%, 47%) 100%)',
    hero: 'linear-gradient(135deg, hsl(0, 84%, 60% / 0.9), hsl(0, 84%, 50% / 0.8))',
  },
  fonts: {
    heading: 'Playfair Display',
    body: 'Inter',
  },
  contact: {
    phone: '+1 (555) 123-SUITE',
    email: 'info@premiersuite.com',
    whatsapp: '+15551234567',
    address: '123 Luxury Avenue, Premium District, City 12345',
    office: {
      lat: 40.7128,
      lng: -74.0060,
    },
  },
  social: {
    facebook: 'https://facebook.com/premiersuite',
    instagram: 'https://instagram.com/premiersuite',
    twitter: 'https://twitter.com/premiersuite',
    linkedin: 'https://linkedin.com/company/premiersuite',
  },
};

export type Theme = typeof theme;