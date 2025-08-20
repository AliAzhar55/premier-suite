import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Heart, 
  Share2, 
  Phone, 
  MessageCircle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { properties } from '@/utils/data';
import { theme } from '@/utils/theme';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Property Not Found</h2>
          <p className="text-muted-foreground">The property you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/properties">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild>
          <Link to="/properties">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Link>
        </Button>
      </div>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 mb-12">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-luxury">
          <img
            src={property.images[currentImageIndex] || '/api/placeholder/1200/600'}
            alt={property.title}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setIsGalleryOpen(true)}
          />
          
          {/* Navigation Arrows */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-background/80 rounded-full px-4 py-2">
            <span className="text-sm font-medium">
              {currentImageIndex + 1} / {property.images.length}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isLiked 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="w-12 h-12 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Property Type Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              {property.type}
            </span>
          </div>
        </div>

        {/* Thumbnail Strip */}
        {property.images.length > 1 && (
          <div className="flex space-x-4 mt-6 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'border-primary' 
                    : 'border-transparent hover:border-border'
                }`}
              >
                <img
                  src={image}
                  alt={`${property.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Property Details */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl font-heading font-bold">
                  {property.title}
                </h1>
                {property.featured && (
                  <span className="bg-gradient-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>

              <div className="text-4xl font-heading font-bold text-gradient">
                {formatPrice(property.price)}
              </div>
            </div>

            {/* Property Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-card rounded-xl border border-border/50">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-3">
                  <Bed className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{property.bedrooms}</div>
                <div className="text-sm text-muted-foreground">Bedrooms</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-3">
                  <Bath className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{property.bathrooms}</div>
                <div className="text-sm text-muted-foreground">Bathrooms</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-3">
                  <Square className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{property.area.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Sq Ft</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold">Description</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border/50"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold">Location</h2>
              <div className="aspect-[16/9] bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Interactive map would be displayed here</p>
                  <p className="text-sm text-muted-foreground">
                    Coordinates: {property.coordinates.lat}, {property.coordinates.lng}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-card sticky top-24">
              <h3 className="text-xl font-heading font-bold mb-6">Interested in this property?</h3>
              
              <div className="space-y-4">
                <Button 
                  variant="luxury" 
                  className="w-full"
                  onClick={() => setShowContactForm(true)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Inquiry
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <a href={`tel:${theme.contact.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>

                <Button 
                  variant="gold" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={`https://wa.me/${theme.contact.whatsapp}?text=Hi! I'm interested in ${property.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Viewing
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Contact our expert team for personalized assistance
                </p>
              </div>
            </div>

            {/* Agent/Company Info */}
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h4 className="font-heading font-bold mb-4">Listed by</h4>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">PS</span>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">{theme.brand.name}</h5>
                  <p className="text-sm text-muted-foreground">{theme.brand.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-card rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-luxury border border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold">Property Inquiry</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowContactForm(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                  placeholder={`I'm interested in ${property.title}...`}
                />
              </div>

              <Button variant="luxury" className="w-full">
                Send Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Fullscreen Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-4 right-4 z-60"
          >
            <X className="w-6 h-6" />
          </Button>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="max-w-full max-h-full object-contain"
            />
            
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;