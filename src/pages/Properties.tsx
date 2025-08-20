import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, SortAsc, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';
import SearchFilter, { SearchFilters } from '@/components/SearchFilter';
import { properties } from '@/utils/data';

const Properties = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    priceMin: '',
    priceMax: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
  });
  
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'bedrooms', label: 'Bedrooms' },
    { value: 'area', label: 'Area' },
  ];

  const filteredAndSortedProperties = useMemo(() => {
    let filtered = properties.filter(property => {
      if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      if (filters.propertyType && property.type !== filters.propertyType) {
        return false;
      }
      if (filters.priceMin && property.price < parseInt(filters.priceMin)) {
        return false;
      }
      if (filters.priceMax && property.price > parseInt(filters.priceMax)) {
        return false;
      }
      if (filters.bedrooms && property.bedrooms < parseInt(filters.bedrooms)) {
        return false;
      }
      if (filters.bathrooms && property.bathrooms < parseInt(filters.bathrooms)) {
        return false;
      }
      return true;
    });

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'bedrooms':
          return b.bedrooms - a.bedrooms;
        case 'area':
          return b.area - a.area;
        default: // newest
          return 0; // Since we don't have dates, keep original order
      }
    });

    return filtered;
  }, [properties, filters, sortBy]);

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Luxury <span className="text-gradient">Properties</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive collection of premium properties
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-12">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full"
            >
              <Filter className="w-4 h-4 mr-2" />
              {showFilters ? 'Hide' : 'Show'} Filters
            </Button>
          </div>

          {/* Search Filter Component */}
          <div className={`${showFilters || 'hidden lg:block'}`}>
            <SearchFilter onSearch={handleSearch} variant="page" />
          </div>

          {/* Sort and View Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-card rounded-xl p-4 border border-border/50">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {filteredAndSortedProperties.length} properties found
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <SortAsc className="w-4 h-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-border rounded-lg px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        {filteredAndSortedProperties.length > 0 ? (
          <motion.div
            layout
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {filteredAndSortedProperties.map((property, index) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Filter className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">No Properties Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria to find more properties.
              </p>
              <Button 
                onClick={() => setFilters({
                  location: '',
                  priceMin: '',
                  priceMax: '',
                  propertyType: '',
                  bedrooms: '',
                  bathrooms: '',
                })}
                variant="luxury"
              >
                Clear Filters
              </Button>
            </div>
          </motion.div>
        )}

        {/* Load More */}
        {filteredAndSortedProperties.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Properties
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;