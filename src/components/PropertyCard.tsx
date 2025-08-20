import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Property } from '@/utils/data';
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Heart,
  Share2,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.origin + `/properties/${property.id}`,
      });
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/properties/${property.id}`}>
        <div className="bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={property.images[currentImageIndex] || '/api/placeholder/400/300'}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Image Navigation Dots */}
            {property.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {property.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'bg-background' : 'bg-background/50'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Property Type Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                {property.type}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handleLike}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isLiked 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="w-8 h-8 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Featured Badge */}
            {property.featured && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-secondary text-secondary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Price and Location */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-heading font-bold text-gradient">
                  {formatPrice(property.price)}
                </h3>
                {property.featured && (
                  <span className="text-secondary text-sm font-semibold">
                    Premium
                  </span>
                )}
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{property.location}</span>
              </div>
            </div>

            {/* Title */}
            <h4 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {property.title}
            </h4>

            {/* Property Details */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-1" />
                  <span>{property.area.toLocaleString()} sq ft</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm line-clamp-2">
              {property.description}
            </p>

            {/* CTA Button */}
            <Button 
              variant="outline" 
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;