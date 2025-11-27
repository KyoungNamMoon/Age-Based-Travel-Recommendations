import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Plane, SlidersHorizontal } from "lucide-react";
import { Home } from "./components/Home";
import { DestinationDetail } from "./components/DestinationDetail";
import { FilterSheet, FilterValues } from './components/FilterSheet';
import { SearchTabs } from './components/SearchTabs';
import { RecentSearches } from './components/RecentSearches';


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
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <a href="/" className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-900 font-bold text-xl">TravelHub</span>
                </a>
                
                <nav className="hidden md:flex items-center gap-6">
                  <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Flights</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Car Rentals</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Support</a>
                </nav>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors relative"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  <span className="hidden md:inline">Filters</span>
                  {getActiveFilterCount() > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                      {getActiveFilterCount()}
                    </span>
                  )}
                </button>
                <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Sign in
                </button>
                <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Hero Section with Search */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-12 min-h-[400px] flex items-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <div className="text-center mb-8">
               <h2 className="mb-3">Travel Anywhere, at the Best Price</h2>
               <p className="text-blue-100">
                 Book flights, hotels, and car rentals all in one place
               </p>
            </div>
            
            <SearchTabs />
          </div>
        </section>


        
        {/* Recent Searches Section */}
        <section className="bg-white py-8">
          <RecentSearches />
        </section>

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