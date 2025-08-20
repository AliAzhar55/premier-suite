import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { theme } from '@/utils/theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Properties', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const propertyTypes = [
    { name: 'Luxury Apartments', path: '/properties?type=apartment' },
    { name: 'Premium Houses', path: '/properties?type=house' },
    { name: 'Exclusive Condos', path: '/properties?type=condo' },
    { name: 'Waterfront Villas', path: '/properties?type=villa' },
  ];

  const socialLinks = [
    { icon: Facebook, href: theme.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: theme.social.instagram, label: 'Instagram' },
    { icon: Twitter, href: theme.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: theme.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-luxury"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-luxury rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">
                    {theme.brand.name}
                  </h3>
                  <p className="text-sm text-background/70">
                    {theme.brand.tagline}
                  </p>
                </div>
              </div>

              <p className="text-background/80 leading-relaxed">
                {theme.brand.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-heading font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-background/80 hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Property Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-heading font-semibold">Property Types</h4>
              <ul className="space-y-3">
                {propertyTypes.map((type) => (
                  <li key={type.name}>
                    <Link
                      to={type.path}
                      className="text-background/80 hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {type.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-heading font-semibold">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-background/80 text-sm">
                    {theme.contact.address}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href={`tel:${theme.contact.phone}`}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {theme.contact.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href={`mailto:${theme.contact.email}`}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {theme.contact.email}
                  </a>
                </div>

                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={`https://wa.me/${theme.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-background/60 text-sm">
                © {currentYear} {theme.brand.name}. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <Link 
                  to="/privacy" 
                  className="text-background/60 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="text-background/60 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;