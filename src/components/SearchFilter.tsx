import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Home,
  SlidersHorizontal,
  X
} from 'lucide-react';

interface SearchFilterProps {
  onSearch?: (filters: SearchFilters) => void;
  variant?: 'hero' | 'page';
  className?: string;
}

export interface SearchFilters {
  location: string;
  priceMin: string;
  priceMax: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
}

const SearchFilter = ({ onSearch, variant = 'page', className = '' }: SearchFilterProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    priceMin: '',
    priceMax: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
  });
  
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const propertyTypes = [
    { value: '', label: 'All Types' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'condo', label: 'Condo' },
    { value: 'villa', label: 'Villa' },
    { value: 'townhouse', label: 'Townhouse' },
  ];

  const bedroomOptions = [
    { value: '', label: 'Any' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
    { value: '5', label: '5+' },
  ];

  const bathroomOptions = [
    { value: '', label: 'Any' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
  ];

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    onSearch?.(filters);
    if (variant === 'hero') {
      setIsExpanded(false);
    }
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      priceMin: '',
      priceMax: '',
      propertyType: '',
      bedrooms: '',
      bathrooms: '',
    });
    setShowAdvanced(false);
  };

  const isHeroVariant = variant === 'hero';

  if (isHeroVariant && !isExpanded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`max-w-4xl mx-auto ${className}`}
      >
        <div className="bg-background/95 backdrop-blur-md rounded-2xl shadow-luxury border border-border/50 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Location"
                value={filters.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-muted rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
              />
            </div>

            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <select
                value={filters.priceMin}
                onChange={(e) => handleInputChange('priceMin', e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-muted rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none appearance-none"
              >
                <option value="">Min Price</option>
                <option value="500000">$500K+</option>
                <option value="1000000">$1M+</option>
                <option value="2000000">$2M+</option>
                <option value="5000000">$5M+</option>
              </select>
            </div>

            <div className="relative">
              <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <select
                value={filters.propertyType}
                onChange={(e) => handleInputChange('propertyType', e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-muted rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none appearance-none"
              >
                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={handleSearch}
                variant="luxury"
                size="lg"
                className="flex-1"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
              <Button
                onClick={() => setIsExpanded(true)}
                variant="outline"
                size="lg"
                className="px-4"
              >
                <SlidersHorizontal className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-background rounded-2xl shadow-card border border-border/50 p-6 ${className}`}
    >
      {isHeroVariant && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-heading font-semibold">Advanced Search</h3>
          <Button
            onClick={() => setIsExpanded(false)}
            variant="ghost"
            size="icon"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      )}

      <div className="space-y-6">
        {/* Basic Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-foreground mb-2">
              Location
            </label>
            <MapPin className="absolute left-3 top-10 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Enter location"
              value={filters.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Property Type
            </label>
            <select
              value={filters.propertyType}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
              className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none appearance-none"
            >
              {propertyTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Min Price
              </label>
              <input
                type="number"
                placeholder="$500,000"
                value={filters.priceMin}
                onChange={(e) => handleInputChange('priceMin', e.target.value)}
                className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Max Price
              </label>
              <input
                type="number"
                placeholder="$2,000,000"
                value={filters.priceMax}
                onChange={(e) => handleInputChange('priceMax', e.target.value)}
                className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="flex items-center justify-between">
          <Button
            onClick={() => setShowAdvanced(!showAdvanced)}
            variant="ghost"
            className="text-primary hover:text-primary"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            {showAdvanced ? 'Hide' : 'Show'} Advanced Filters
          </Button>
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Bedrooms
              </label>
              <select
                value={filters.bedrooms}
                onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none appearance-none"
              >
                {bedroomOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Bathrooms
              </label>
              <select
                value={filters.bathrooms}
                onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none appearance-none"
              >
                {bathroomOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4">
          <Button
            onClick={clearFilters}
            variant="outline"
            className="text-muted-foreground"
          >
            Clear All
          </Button>
          <Button
            onClick={handleSearch}
            variant="luxury"
            size="lg"
            className="px-8"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Properties
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchFilter;