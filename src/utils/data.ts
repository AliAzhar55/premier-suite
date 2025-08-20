// Dummy data for the real estate website

export interface Property {
  id: string;
  title: string;
  price: number;
  type: 'apartment' | 'house' | 'condo' | 'villa' | 'townhouse';
  location: string;
  description: string;
  images: string[];
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  bedrooms: number;
  bathrooms: number;
  area: number; // sq ft
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
}

// Sample Properties
export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Downtown Penthouse',
    price: 2500000,
    type: 'apartment',
    location: 'Downtown District',
    description: 'Stunning penthouse with panoramic city views, featuring modern amenities and premium finishes throughout.',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    amenities: ['City Views', 'Private Balcony', 'Modern Kitchen', 'Gym Access', 'Concierge Service'],
    coordinates: { lat: 40.7128, lng: -74.0060 },
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    featured: true,
  },
  {
    id: '2',
    title: 'Modern Waterfront Villa',
    price: 3800000,
    type: 'villa',
    location: 'Waterfront Heights',
    description: 'Exclusive waterfront villa with private dock, infinity pool, and breathtaking ocean views.',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    amenities: ['Ocean Views', 'Private Dock', 'Infinity Pool', 'Wine Cellar', 'Smart Home'],
    coordinates: { lat: 40.7589, lng: -73.9851 },
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    featured: true,
  },
  {
    id: '3',
    title: 'Contemporary Garden Condo',
    price: 850000,
    type: 'condo',
    location: 'Garden District',
    description: 'Beautifully designed condo with garden access, modern finishes, and excellent natural light.',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600'],
    amenities: ['Garden Access', 'Natural Light', 'Modern Design', 'Parking Space'],
    coordinates: { lat: 40.7505, lng: -73.9934 },
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    featured: false,
  },
  {
    id: '4',
    title: 'Executive Townhouse',
    price: 1650000,
    type: 'townhouse',
    location: 'Executive Hills',
    description: 'Spacious townhouse perfect for families, featuring a private garage and beautiful landscaping.',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600'],
    amenities: ['Private Garage', 'Landscaped Yard', 'Family Room', 'Storage Space'],
    coordinates: { lat: 40.7282, lng: -74.0776 },
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    featured: false,
  },
];

// Sample Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Real Estate Trends for 2024',
    excerpt: 'Discover the latest trends shaping the luxury real estate market this year.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: '/api/placeholder/600/400',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Market Trends',
  },
  {
    id: '2',
    title: 'How to Choose the Perfect Investment Property',
    excerpt: 'A comprehensive guide to making smart real estate investment decisions.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: '/api/placeholder/600/400',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Investment',
  },
  {
    id: '3',
    title: 'Luxury Home Design: Latest Interior Trends',
    excerpt: 'Explore the newest interior design trends in luxury real estate.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: '/api/placeholder/600/400',
    author: 'Emma Rodriguez',
    date: '2024-01-05',
    category: 'Design',
  },
];

// Sample Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'David Thompson',
    role: 'CEO, Thompson Industries',
    content: 'Premier Suite helped us find the perfect office location. Their expertise and dedication made the process seamless.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    id: '2',
    name: 'Lisa Wang',
    role: 'Investment Banker',
    content: 'Outstanding service and attention to detail. They understood exactly what we were looking for and delivered beyond expectations.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    id: '3',
    name: 'Robert Martinez',
    role: 'Real Estate Investor',
    content: 'The team at Premier Suite has deep market knowledge and always provides honest, professional advice.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
];

// Sample Team Members
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alexandra Rivers',
    role: 'Principal Broker',
    bio: 'With over 15 years in luxury real estate, Alexandra leads our team with expertise in high-end properties and investment opportunities.',
    image: '/api/placeholder/300/400',
    email: 'alexandra@premiersuite.com',
    phone: '+1 (555) 123-4567',
  },
  {
    id: '2',
    name: 'James Morrison',
    role: 'Senior Agent',
    bio: 'Specializing in waterfront and downtown properties, James brings a wealth of knowledge and exceptional client service.',
    image: '/api/placeholder/300/400',
    email: 'james@premiersuite.com',
    phone: '+1 (555) 234-5678',
  },
  {
    id: '3',
    name: 'Maria Santos',
    role: 'Investment Specialist',
    bio: 'Maria focuses on investment properties and commercial real estate, helping clients build their property portfolios.',
    image: '/api/placeholder/300/400',
    email: 'maria@premiersuite.com',
    phone: '+1 (555) 345-6789',
  },
];

export const services = [
  {
    id: '1',
    title: 'Luxury Property Sales',
    description: 'Expert guidance for buying and selling premium residential properties.',
    icon: 'Home',
  },
  {
    id: '2',
    title: 'Investment Consulting',
    description: 'Strategic advice for building and managing real estate investment portfolios.',
    icon: 'TrendingUp',
  },
  {
    id: '3',
    title: 'Property Management',
    description: 'Comprehensive management services for rental and investment properties.',
    icon: 'Building',
  },
  {
    id: '4',
    title: 'Market Analysis',
    description: 'In-depth market research and valuation services for informed decisions.',
    icon: 'BarChart3',
  },
];