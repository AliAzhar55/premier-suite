// Real estate website data

export interface Property {
  id: string;
  title: string;
  price: number;
  type: string;
  location: string;
  description: string;
  images: string[];
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content?: string;
  review?: string;
  avatar?: string;
  photo?: string;
  rating?: number;
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

// Properties Data
export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Beachfront Villa",
    price: 1200000,
    type: "Villa",
    location: "Miami Beach, FL",
    description:
      "Experience luxury living in this stunning beachfront villa featuring 5 bedrooms, private pool, and panoramic ocean views.",
    images: [
      "/assets/images/property1-1.jpg",
      "/assets/images/property1-2.jpg",
      "/assets/images/property1-3.jpg"
    ],
    amenities: [
      "5 Bedrooms",
      "4 Bathrooms",
      "Private Pool",
      "Ocean View",
      "Garage"
    ],
    coordinates: { lat: 25.790654, lng: -80.1300455 },
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    featured: true
  },
  {
    id: "2",
    title: "Modern Downtown Apartment",
    price: 350000,
    type: "Apartment",
    location: "New York, NY",
    description:
      "A stylish 2-bedroom apartment located in the heart of downtown with modern finishes and skyline views.",
    images: [
      "/assets/images/property2-1.jpg",
      "/assets/images/property2-2.jpg",
      "/assets/images/property2-3.jpg"
    ],
    amenities: [
      "2 Bedrooms",
      "2 Bathrooms",
      "City View",
      "Gym Access",
      "24/7 Security"
    ],
    coordinates: { lat: 40.712776, lng: -74.005974 },
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    featured: false
  },
  {
    id: "3",
    title: "Cozy Suburban Home",
    price: 220000,
    type: "House",
    location: "Austin, TX",
    description:
      "Perfect family home featuring 3 bedrooms, a spacious backyard, and a modern open kitchen layout.",
    images: [
      "/assets/images/property3-1.jpg",
      "/assets/images/property3-2.jpg",
      "/assets/images/property3-3.jpg"
    ],
    amenities: [
      "3 Bedrooms",
      "2 Bathrooms",
      "Backyard",
      "Garage",
      "Pet-Friendly"
    ],
    coordinates: { lat: 30.267153, lng: -97.743057 },
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    featured: false
  }
];

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Home Buying Tips for First-Time Buyers",
    author: "Sarah Johnson",
    date: "2025-08-10",
    excerpt:
      "Buying your first home can be overwhelming. Here are 10 essential tips to make the process easier and stress-free...",
    image: "/assets/images/blog1.jpg",
    content:
      "Buying your first home is an exciting journey, but it can also be stressful. Start by understanding your budget, getting pre-approved for a mortgage, and researching neighborhoods...",
    category: "Home Buying"
  },
  {
    id: "2",
    title: "Why Real Estate Investment is Still Profitable in 2025",
    author: "Mark Williams",
    date: "2025-07-20",
    excerpt:
      "Real estate remains one of the safest investment options. Here's why 2025 is a great year for property investors...",
    image: "/assets/images/blog2.jpg",
    content:
      "Despite market fluctuations, real estate continues to deliver strong returns. Key trends in 2025 include sustainable housing, remote work impact, and suburban growth...",
    category: "Investment"
  }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emily Carter",
    role: "Home Buyer",
    photo: "/assets/images/testimonial1.jpg",
    review:
      "The team was amazing! They helped me find my dream home within my budget and made the process so smooth.",
    rating: 5
  },
  {
    id: "2",
    name: "James Miller",
    role: "Investor",
    photo: "/assets/images/testimonial2.jpg",
    review:
      "Great experience! The properties are well-managed, and I received excellent ROI on my investments.",
    rating: 5
  },
  {
    id: "3",
    name: "Sophia Brown",
    role: "Seller",
    photo: "/assets/images/testimonial3.jpg",
    review:
      "Sold my property faster than I expected! The marketing and exposure were top-notch.",
    rating: 5
  }
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