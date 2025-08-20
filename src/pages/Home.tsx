import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';
import SearchFilter from '@/components/SearchFilter';
import { 
  ArrowRight, 
  Star, 
  Award, 
  Users, 
  CheckCircle,
  Quote,
  Play,
  MessageCircle,
  Phone
} from 'lucide-react';
import { properties, testimonials, teamMembers } from '@/utils/data';
import { theme } from '@/utils/theme';

const Home = () => {
  const featuredProperties = properties.filter(p => p.featured);
  
  const stats = [
    { number: '500+', label: 'Properties Sold', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '15+', label: 'Years Experience', icon: Users },
    { number: '$2B+', label: 'Properties Value', icon: CheckCircle },
  ];

  const services = [
    {
      title: 'Luxury Property Sales',
      description: 'Expert guidance for buying and selling premium residential properties.',
      icon: '🏡',
    },
    {
      title: 'Investment Consulting', 
      description: 'Strategic advice for building and managing real estate investment portfolios.',
      icon: '📈',
    },
    {
      title: 'Property Management',
      description: 'Comprehensive management services for rental and investment properties.',
      icon: '🏢',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero z-10"></div>
          <img
            src="/api/placeholder/1920/1080"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Find Your
                <span className="block text-gradient bg-gradient-secondary">
                  Dream Property
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Discover luxury real estate with personalized service and expert guidance.
                Your perfect home awaits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="hero" asChild>
                <Link to="/properties">
                  Explore Properties
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="hero"
                className="bg-background/10 text-primary-foreground border-primary-foreground hover:bg-background hover:text-foreground"
                asChild
              >
                <a href={`tel:${theme.contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full px-4 z-20">
          <SearchFilter variant="hero" />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-foreground rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                    {stat.number}
                  </h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Featured <span className="text-gradient">Properties</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/properties">
                View All Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Why Choose <span className="text-gradient">Premier Suite</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  With over 15 years of experience in luxury real estate, we provide 
                  unparalleled service and expertise to help you find the perfect property.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                  >
                    <div className="text-4xl">{service.icon}</div>
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-luxury">
                <img
                  src="/api/placeholder/600/700"
                  alt="Luxury Property Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-luxury opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative"
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-luxury"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Get in touch with our expert team today and let us help you 
              find the perfect luxury property that meets all your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="hero" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="hero"
                className="bg-background/10 text-primary-foreground border-primary-foreground hover:bg-background hover:text-foreground"
                asChild
              >
                <a 
                  href={`https://wa.me/${theme.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;