import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, TrendingUp, Building, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Luxury Property Sales',
      description: 'Expert guidance for buying and selling premium residential properties with personalized service.',
      features: ['Property Valuation', 'Market Analysis', 'Negotiation Support', 'Legal Assistance']
    },
    {
      icon: TrendingUp,
      title: 'Investment Consulting',
      description: 'Strategic advice for building and managing real estate investment portfolios.',
      features: ['Portfolio Analysis', 'ROI Calculations', 'Market Trends', 'Risk Assessment']
    },
    {
      icon: Building,
      title: 'Property Management',
      description: 'Comprehensive management services for rental and investment properties.',
      features: ['Tenant Screening', 'Maintenance', 'Rent Collection', 'Financial Reporting']
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      description: 'In-depth market research and valuation services for informed decisions.',
      features: ['Market Reports', 'Comparative Analysis', 'Trend Forecasting', 'Investment Opportunities']
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="luxury" size="lg" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;