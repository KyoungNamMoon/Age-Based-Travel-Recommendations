import { Star, ChevronLeft, ChevronRight, MapPin, Flag} from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface UniqueDestination {
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  tags: string[];
}

export function UniqueDestinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const destinations: UniqueDestination[] = [
    {
      name: "Cozy Mountain Cabin",
      country: "Colorado, USA",
      description: "Secluded retreat with stunning mountain views",
      imageUrl: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.6,
      tags: ["Mountain", "Cabin", "Cozy"]
    },
    {
      name: "Luxury Pool Villa",
      country: "Tennessee, USA",
      description: "Modern villa with private infinity pool",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.8,
      tags: ["Luxury", "Pool", "Modern"]
    },
    {
      name: "Private Hot Tub Retreat",
      country: "Virginia, USA",
      description: "Romantic getaway with outdoor hot tub",
      imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.6,
      tags: ["Romance", "Hot Tub", "Private"]
    },
    {
      name: "Log Cabin Estate",
      country: "Tennessee, USA",
      description: "Traditional log cabin in scenic woodland",
      imageUrl: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.6,
      tags: ["Traditional", "Woodland", "Family"]
    },
    {
      name: "Modern Treehouse",
      country: "Oregon, USA",
      description: "Unique treehouse experience in the forest",
      imageUrl: "https://images.unsplash.com/photo-1501685454-aa7aa2e9d97e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.4,
      tags: ["Treehouse", "Nature", "Unique"]
    },
    {
      name: "Glass Dome House",
      country: "Iceland",
      description: "Sleep under the stars in a glass igloo",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.8,
      tags: ["Unique", "Aurora", "Luxury"]
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
          <Flag className="w-6 h-6 text-blue-600" />
          <h3 className="text-gray-900">Unique Destinations to Explore</h3>
        </div>
        <p className="text-gray-600">
          Discover extraordinary places for unforgettable experiences
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
