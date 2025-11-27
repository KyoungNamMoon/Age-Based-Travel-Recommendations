import { Star, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface MonthlyDestination {
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  tags: string[];
}

export function MonthlyDestinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const destinations: MonthlyDestination[] = [
    {
      name: "Lapland Winter Wonderland",
      country: "Finland",
      description: "Experience the magic of winter in Santa's hometown",
      imageUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.7,
      tags: ["Winter", "Family", "Northern Lights"]
    },
    {
      name: "Northern Lights Experience",
      country: "Norway",
      description: "Witness the spectacular aurora borealis dance",
      imageUrl: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.8,
      tags: ["Aurora", "Nature", "Adventure"]
    },
    {
      name: "Swiss Alps Ski Resort",
      country: "Switzerland",
      description: "World-class skiing and breathtaking mountain views",
      imageUrl: "https://images.unsplash.com/photo-1551524164-687a55dd1126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.7,
      tags: ["Skiing", "Mountain", "Luxury"]
    },
    {
      name: "Christmas Markets Tour",
      country: "Germany",
      description: "Traditional markets filled with festive cheer",
      imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.6,
      tags: ["Culture", "Food", "Shopping"]
    },
    {
      name: "Hot Springs Retreat",
      country: "Iceland",
      description: "Relax in geothermal pools under the stars",
      imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.8,
      tags: ["Relaxation", "Hot Springs", "Wellness"]
    },
    {
      name: "Winter Safari Adventure",
      country: "Canada",
      description: "Wildlife viewing in pristine winter landscapes",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.5,
      tags: ["Wildlife", "Safari", "Nature"]
    }
  ];

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
            <div 
              key={index}
              onClick={() => navigate(`/destination/${encodeURIComponent(destination.name)}`)}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0 w-[350px]"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={destination.imageUrl} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{destination.country}</span>
                </div>
                
                <p className="text-gray-800 mb-2">{destination.name}</p>
                <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                
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
          ))}
        </div>

        {/* Right arrow button */}
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
