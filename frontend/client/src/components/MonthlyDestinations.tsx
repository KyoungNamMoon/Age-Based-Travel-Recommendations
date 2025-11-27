import { Star, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiDestination } from "./Home";

interface MonthlyDestinationsProps {
  destinations: ApiDestination[];
}

export function MonthlyDestinations({ destinations }: MonthlyDestinationsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!destinations || destinations.length === 0) {
    return null;
  }
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h3 className="text-gray-900">This Month's Featured Destinations</h3>
        </div>
        <p className="text-gray-600">
          Special winter travel packages curated for December 2025
        </p>
      </div>
      
      {/* Carousel container */}
      <div className="relative">
        {/* Left arrow button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -ml-5"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Scroll container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
        {destinations.map((destination, index) => (
            <MonthlyDestinationCard key={index} destination={destination} />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -mr-5"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

function MonthlyDestinationCard({ destination }: { destination: ApiDestination }) {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string>(
    "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  );
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    if (!destination.name) return;
    fetch(`${API_URL}/api/gallery?keyword=${encodeURIComponent(destination.name)}&page=1`)
      .then(res => res.json())
      .then(photos => {
        if (Array.isArray(photos) && photos.length > 0) setImageUrl(photos[0]);
      })
      .catch(err => console.warn("Image fetch error:", err));
  }, [destination.name, API_URL]);

  return (
    <div 
      onClick={() => navigate(`/destination/${encodeURIComponent(destination.name)}`)}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0 w-[350px]"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500">{destination.country}</span>
        </div>
        
        <p className="text-gray-800 mb-2 font-bold">{destination.name}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {destination.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}