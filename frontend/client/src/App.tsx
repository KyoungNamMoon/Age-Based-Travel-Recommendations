import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from './components/Header';
import { DestinationDetail } from "./components/DestinationDetail";
import { FilterSheet, FilterValues } from './components/FilterSheet';

export default function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterValues>({
    regions: [],
    activities: [],
    priceRange: [],
    ratings: []
  });

  const handleApplyFilters = (newFilters: FilterValues) => {
    setFilters(newFilters);
    setIsFilterOpen(false); 
  };

  const getActiveFilterCount = () => {
    return filters.regions.length + filters.activities.length + 
           filters.priceRange.length + filters.ratings.length;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header 
          onFilterClick={() => setIsFilterOpen(true)}
          activeFilterCount={getActiveFilterCount()}
        />


        {/* Filter Sheet */}
        <FilterSheet 
          isOpen={isFilterOpen} 
          onClose={() => setIsFilterOpen(false)}
          onApplyFilters={handleApplyFilters}
          currentFilters={filters}
        />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:destinationId" element={<DestinationDetail />} />
        </Routes>
      </div>
    </Router>
  );
}